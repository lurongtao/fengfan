import React from 'react'
import { Input } from 'antd';
import { Button , message} from 'antd';
import Content from '../qanda/qandaDetailContent';
import Axios from '../../utils/axios.util'

class Comment extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  render(){
    let CommentNodes = null
    // console.log(this.props)
    if(this.props.detailDatas){
       CommentNodes= this.props.detailDatas.map((comment, index) => {
        return (
          <Content answer={comment}></Content>
        )
      })
    }

    return (
      <div className="section">
        <p>回帖</p>
        <div className="reply">
          <Input type="textarea" rows={4} placeholder="大胆的回复吧" ref="inputContent"/>
          <Button type="primary" onClick={this.reply.bind(this)}>回复</Button>
        </div>
        <p>全部回帖({this.props.detailDatas?this.props.detailDatas.length:null})</p>
        <div className="cat" />
        <div className="list">
          {CommentNodes?CommentNodes:null}
        </div>
      </div>
    )
  }

//点击回贴，调用父组件的方法重新获取数据，并渲染组件
  reply(){
    // console.log(this.refs.inputContent.refs.input.value);s
    var that = this
    Axios.post(this.props.uri, {
      qid: 10, // 问题id：[数值：必填]
      content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
    }, (res)=>{
      if(res.status == 200){
        that.props.refreshGetData()
      }
      let data = res.data.data
      if(data.status == "ok"){

        message.success(data.msg,1,()=>{
          location.reload()
        })
      }else{
        message.error('提交失败，请重试')
      }
    })
  }

}

export default Comment
