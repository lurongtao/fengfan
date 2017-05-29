import React,{Component} from 'react'
import { Input } from 'antd'
import { Button , message , Select } from 'antd'
import axios from '../../utils/axios.util'
import adminCommon from '../../utils/adminCommon'

class Add extends Component{
  constructor(props){
    super(props)
    this.state={
      size:{
        size:'default'
      },
      classify:[],
      city:[],
      classifyValue:'',
      cityValue:''
    }
  }

  handleClassifyChange(value) {

    //分类
    this.state.classifyValue = value

  }


  handleCityChange(value){

    //城市
    this.state.cityValue = value

  }

  //添加操作
  add(){

    let title = this.refs.title.value
    let txt = this.refs.txt.refs.input.value
    let uri = this.props.uri

    let callback = (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        this.refs.title.value = ''
        this.refs.txt.refs.input.value = ''
        message.success(data.msg,1,()=>{
            this.props.jumpHandle()
        })
      }else{
        message.error('提交失败，请重试')
      }
    }
    let tag = this.props.tag//区分招聘和面试题(发送数据不同)
    let params = {}
    let cl//存放城市或者分类
    if(tag == "job"){
      cl = this.state.cityValue
      params = {
        url:uri,
        method:"post",
        data:{
          uid: 4,
          title: title,
          city: cl,
          content: txt,
        },
        callback:callback
      }
    }else if(tag == "interviewq"){
      cl = this.state.classifyValue
      params = {
        url:uri,
        method:"post",
        data:{
          uid: 4,
          title: title,
          tag: cl,
          content: txt
        },
        callback:callback
      }
    }
    if(!title || !txt || !cl){
      message.warning('请填写完整')
    }else{
      axios.lgypost(params)
    }

  }

  tag(){
    let tag = this.props.tag//区分招聘和面试题(显示城市或者分类)
    if(tag == "job"){
      return (
        <div className="city">
          <Select
            ref="select"
            size={this.state.size}
            defaultValue="添加城市"
            onChange={this.handleCityChange.bind(this)}
            style={{ width: 300 }}
          >
          {this.state.city}
         </Select>
        </div>
      )
    }else if(tag == "interviewq"){
      return (
        <div className="classify">
          <Select
            ref="classify"
            size={this.state.size}
            defaultValue="添加分类"
            onChange={this.handleClassifyChange.bind(this)}
            style={{ width: 300 }}
          >
          {this.state.classify}
         </Select>
        </div>
      )
    }
  }


  render(){
    return (
        <div className="container">
          <div className="tit">{this.props.title}</div>
          <div className="title">
            <input type="text" placeholder="添加标题" ref="title"/>
          </div>
          {this.tag()}
          <div className="txt">
            <Input type="textarea" rows={4}  ref="txt"/>
          </div>
          <Button onClick={this.add.bind(this)}>提交</Button>
        </div>
    )
  }

  componentDidMount(){

    let tag = this.props.tag//区分招聘和面试题(发送数据不同)
    if(tag == "job"){
      //请求城市分类数据
      adminCommon.city(this)
    }else if(tag == "interviewq"){
      //请求管理分类数据
      adminCommon.classify(this)
    }
  }

}

export default Add
