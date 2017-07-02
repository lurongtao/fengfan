import React,{Component} from 'react'
import { Input } from 'antd'
import axios from '../../../utils/axios.util'
import adminCommon from '../../../utils/adminCommon'
import { Select ,message} from 'antd'
import Qs from 'qs'
const Option = Select.Option

class VideoUpdate extends Component{
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

  handleClassifyChange(value) {
    //分类
    this.state.classifyValue = value

  }

  handleStageChange(value){
    //阶段
    this.state.stageValue = value
  }


  //视频修改提交操作
  submit(){

    let title = this.refs.title.value//标题
    let desc = this.refs.desc.refs.input.value//描述
    let imgUrl = this.refs.imgUrl.value//图片url
    let videoUrl = this.refs.videoUrl.value//视频url
    let classify = this.state.classifyValue//分类
    let stage = this.state.stageValue//阶段
    let id = this.props.params.id

    let callback = (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        //提交成功
        message.success(data.msg,1,()=>{
          this.props.router.push("/admin/video/list")
        })
      }else{
        //提交失败
        message.error('提交失败，请重试')
      }
    }
    let data = {
      id:id,
      title:title,
      url:videoUrl,
      img:imgUrl,
      summary:desc,
      category:{
        // step:stage,
        step:1,
        tag:classify
      }
    }

    let params = {
      url:'/api/video/update',
      method:'post',
      data:Qs.stringify(data),
      callback:callback
    }
    if(!title || !desc || !imgUrl || !videoUrl || !classify ||!stage){
      message.warning('请填写完整')
    }else{
      axios.all(params)
    }
  }

  render(){
    return (
      <div className="m-adVideoAdd">
        <div className="container">
          <div className="tit">视频管理/内容修改</div>
          <div className="addCon">
            <div className="addTitle">
              <input type="text" placeholder="添加标题" ref="title" />
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
            <div className="stage">
              <Select
                ref="select"
                size={this.state.size}
                defaultValue={this.state.stageValue}
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

    let id = this.props.params.id

    //请求视频管理分类数据
    adminCommon.classify(this)

    //请求视频阶段分类数据
    adminCommon.stage(this)

    //请求视频管理列表数据
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          subjects.map((value,index)=>{
            if(value.id == id){
              this.refs.title.value = value.title
              this.refs.desc.refs.input.value = value.summary
              this.refs.imgUrl.value = value.img
              this.refs.videoUrl.value = value.url //缺少字段
              this.setState({
                stageValue: value.category.step,
                classifyValue: value.category.tag
              })
            }
          })
          // this.setState({
          //   classifyValue:data.tag,
          //   stageValue:data.stage
          // })
    }
    let uri='/api/video/list'
    adminCommon.videoList(uri,callback)
  }
}


export default VideoUpdate
