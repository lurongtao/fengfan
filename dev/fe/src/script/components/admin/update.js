import React,{Component} from 'react'
import { Input } from 'antd'
import { Button , message , Select } from 'antd'
import axios from '../../utils/axios.util'
import adminCommon from '../../utils/adminCommon'


class Update extends Component{
  constructor(props){
    super(props)
    this.state={
      size:{
        size:'default'
      },
      classify:[],
      city:[],
      chooseValue:''
    }
  }

  handleClassifyChange(value) {

    //分类
    this.state.classifyValue = value

  }


  handleChooseChange(value){

    this.state.chooseValue = value

  }

  //修改操作
  update(){
    let id = this.props.id
    let title = this.refs.title.value
    let txt = this.refs.txt.refs.input.value
    let uri = this.props.uriUpdate
    let tag = this.props.tag//区分招聘和面试题(发送数据不同)
    let callback = (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        message.success(data.msg,1,()=>{
          this.props.jumpHandle()
        })
      }else{
        message.error('提交失败，请重试')
      }
    }


    let params = {
      start:0,
      count:10
    }
    if(tag == "job"){
      params = {
        url:uri,
        method:"post",
        data:{
          id:id,
          uid: 4,
          title: title,
          city: this.state.chooseValue,
          content: txt,
        },
        callback:callback
      }
    }else if(tag == "interviewq"){
      params = {
        url:uri,
        method:"post",
        data:{
          id:id,
          uid: 4,
          title: title,
          tag: this.state.chooseValue,
          content: txt
        },
        callback:callback
      }
    }
    if(!title || !txt || !this.state.chooseValue){
      message.warning('请填写完整')
    }else{
      axios.all(params)
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
            onChange={this.handleChooseChange.bind(this)}
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
            onChange={this.handleChooseChange.bind(this)}
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
        <Button onClick={this.update.bind(this)}>提交</Button>
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


    let title = this.refs.title
    let txt = this.refs.txt.refs.input
    let id = this.props.id
    let uri = this.props.uriDetail
    let params = {
      uid:4,
      id:id
    }
    let callback = (res)=>{
      let data = res.data.data
      title.value = data.title
      txt.value = data.content
    }
    axios.get(uri,params,callback)
  }


}

export default Update
