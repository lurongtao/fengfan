import React from 'react'

import { Input } from 'antd';
import { Button , message } from 'antd';
import Axios from '../../utils/axios.util';
import Content from './qandaDetailContent';

class qandAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      question: {},
      answers: [],
      CommentNodes: [1,2,3],
      tagData:[],
      isSelected:[],
      num:0
    }
    // 获取数
    // this.getData();
  };

  getData() {
    Axios.post('/api/qanda/detail', {
      id: this.props.params.id
    }, (res)=>{

    })
  };

//选择不超过三个标签
  selectTag(item,id){
    if(this.state.num <3){
      if(this.state.isSelected[id].istrue){
        this.state.isSelected[id].istrue = false
        this.state.num = this.state.num-1
      }else{
        this.state.isSelected[id].istrue = true
        this.state.num = this.state.num +1
      }
    }else{
      if(this.state.isSelected[id].istrue){
        this.state.isSelected[id].istrue = false
        this.state.num = this.state.num-1
      }
    }
    this.setState({
      isSelected:this.state.isSelected
    })
  }

  render() {

    let tagLi = this.state.tagData.map((value,index)=>{
      this.state.isSelected.push({id:value.id,istrue:false,tag:value.title})
      return (
        <li><i className={this.state.isSelected[index].istrue?"active":"" }tagId={index} onClick={this.selectTag.bind(this,value,index)}>{value.title}</i></li>
      )
    })

    return (
      <div className="m-qanda-detail">
          <div className="section">
            <p className="q-title">提问</p>
            <div className="reply">
              <Input placeholder="标题" ref="inputTitle"/>
              <Input type="textarea" rows={4} placeholder="提问内容" ref="inputContent"/>
              <div className="select-question">
                <p>选择问题分类，最多可以选3个</p>
                <ul>
                  {tagLi}
                </ul>
              </div>
              <div className="btn-box">
                <Button type="primary" className="primary" onClick={this.reply.bind(this)}>发布</Button>
              </div>
            </div>
          </div>
          <div className="stopImage">
            <img src="/build/images/stop_images.png"/>
          </div>
      </div>
    )
  }

  reply(){
    let title = this.refs.inputTitle.refs.input.value
    let content = this.refs.inputContent.refs.input.value
  //取出问题标签
    let tags=[]
    this.state.isSelected.map((value,index)=>{
      if(value.istrue){
        tags.push(value.tag)
      }
      return
    })
    Axios.post('/api/qanda/add', {
      tag: tags.join(','), // 问题标签 [字符串：必填] html, css, 原生js, angular, vue,其他等等
      title: title, //标题 [字符串：必填]
      content: content // 回帖内容：[字符串：必填]
    }, (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        message.success(data.msg,1,()=>{
          this.props.router.push("/qanda/list")
        })
      }else{
        message.error('提交失败，请重试')
      }
    })
  }

  componentDidMount() {
    Axios.get('/api/classify/list', {}, (res)=>{
      if (res.data.errcode == -1) {

      } else {
        console.log(res.data.data.subjects);
        this.setState({
          tagData: res.data.data.subjects
        })
      }
    })
  }
}

export default qandAdd;
