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

    let city,classify//存放城市,分类
    let params = {}
    if(tag == "job"){
      city = this.state.cityValue
      classify = this.state.classifyValue
      params = {
        url:uri,
        method:"post",
        data:{
          id:id,
          title: title,
          tag:classify,
          city:city,
          content: txt
        },
        callback:callback
      }
      if(!title || !txt || !classify || !city){
        message.warning('请填写完整')
      }else{
        axios.all(params)
      }
    }else if(tag == "interviewq"){
      classify = this.state.classifyValue
      params = {
        url:uri,
        method:"post",
        data:{
          id:id,
          title: title,
          tag: classify,
          content: txt
        },
        callback:callback
      }
      if(!title || !txt || !classify){
        message.warning('请填写完整')
      }else{
        axios.all(params)
      }
    }
  }

  tag(){
    let tag = this.props.tag//区分招聘和面试题(显示城市或者分类)
    if(tag == "job"){
      return (
        <div>
          <div className="city">
            <Select
              ref="select"
              size={this.state.size}
              defaultValue={this.state.cityValue}
              onChange={this.handleCityChange.bind(this)}
              style={{ width: 300 }}
            >
            {this.state.city}
           </Select>
          </div>
          <div className="classify">
            <Select
              ref="classify"
              size={this.state.size}
              defaultValue={this.state.classifyValue}
              onChange={this.handleClassifyChange.bind(this)}
              style={{ width: 300 }}
            >
            {this.state.classify}
           </Select>
          </div>
        </div>
      )
    }else if(tag == "interviewq"){
      return (
        <div className="classify">
          <Select
            ref="classify"
            size={this.state.size}
            defaultValue={this.state.classifyValue}
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
        <Button onClick={this.update.bind(this)}>提交</Button>
      </div>
    )
  }

  componentDidMount(){
    let tag = this.props.tag//区分招聘和面试题(发送数据不同)
    if(tag == "job"){
      //请求城市分类数据
      adminCommon.city(this)
      //请求管理分类数据
      adminCommon.classify(this)
    }else if(tag == "interviewq"){
      //请求管理分类数据
      adminCommon.classify(this)
    }


    let title = this.refs.title
    let txt = this.refs.txt.refs.input
    let id = this.props.id
    let uri = this.props.uriDetail
    let params = {
      id:id
    }
    let callback = (res)=>{
      let data = res.data.data
      title.value = data.title
      txt.value = data.content
      this.setState({
        classifyValue:data.tag,
        cityValue:data.city
      })
    }
    axios.get(uri,params,callback)
  }
}

export default Update
