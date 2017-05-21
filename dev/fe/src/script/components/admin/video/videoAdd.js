import React,{Component} from 'react'
import { Input } from 'antd'
import axios from '../../../utils/axios.util'
import adminCommon from '../../../utils/adminCommon'
import { Select ,message} from 'antd'

import Qs from 'qs'
const Option = Select.Option



class VideoAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      size:{
        size:'default'
      },
      classify:[],
      stage:[],
      classifyValue:'',
      stageValue:''
    }
  }

  //视频添加提交操作
  submit(){

    let title = this.refs.title.value//标题
    let desc = this.refs.desc.refs.input.value//描述
    let imgUrl = this.refs.imgUrl.value//图片url
    let videoUrl = this.refs.videoUrl.value//视频url
    let classify = this.state.classifyValue//分类
    let stage = this.state.stageValue//阶段

    let callback = (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        //提交成功
        message.success(data.msg)
        this.refs.title.value = ''
        this.refs.desc.refs.input.value = '',
        this.refs.imgUrl.value = '',
        this.refs.videoUrl.value = ''
      }else{
        //提交失败
        message.error('提交失败，请重试')
      }
    }

    let data = {
      title:title,
      url:videoUrl,
      img:imgUrl,
      summary:desc,
      category:{
        step:stage,
        tag:classify
      }
    }
    let params = {
      url:'/api/video/add',
      method:'post',
      data:Qs.stringify(data),
      callback:callback
    }

    if(!title || !desc || !imgUrl || !videoUrl || !classify ||!stage){
      message.warning('请填写完整')
    }else{
      axios.lgypost(params)
    }

  }


  handleClassifyChange(value) {
    //分类
    this.state.classifyValue = value

  }

  handleStageChange(value){
    //阶段
    this.state.stageValue = value

  }

  render(){
    return (
      <div className="m-adVideoAdd">
        <div className="container">
          <div className="tit">视频管理/内容添加</div>
          <div className="addCon">
            <div className="addTitle">
              <input type="text" placeholder="添加标题" ref="title"/>
            </div>
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
            <div className="stage">
              <Select
                ref="select"
                size={this.state.size}
                defaultValue="添加阶段"
                onChange={this.handleStageChange.bind(this)}
                style={{ width: 300 }}
              >
              {this.state.stage}
             </Select>
            </div>
            <div className="desc">
              <Input type="textarea"  ref="desc"/>
            </div>
            <div className="imgUrl">
              <input type="text" placeholder="添加图片url" ref="imgUrl"/>
            </div>
            <div className="videoUrl">
              <input type="text" placeholder="添加视频url" ref="videoUrl"/>
            </div>
            <button className="subBtn"  onClick={this.submit.bind(this)}>提交</button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    //请求管理分类数据
    adminCommon.classify(this)

    //请求阶段分类数据
    adminCommon.stage(this)
  }
}



export default VideoAdd
