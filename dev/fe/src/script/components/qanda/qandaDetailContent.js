import React from 'react'

import { Input, message } from 'antd';
import Axios from '../../utils/axios.util';


class qandaDetailContent extends React.Component {

  setBestAnswer(){
    Axios.post(this.props.besturi, {
      qid: this.props.qid, // 问题id
      aid: this.props.answer.id, // 回答id
    }, (res)=>{
      // if(res.status == 200){
      //   that.props.refreshGetData()
      // }
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

  render() {
    // 设置最佳回帖按钮
    let setBestButton = "";
    if(this.props.besturi) {
      setBestButton = (
        <div className="bestAnswer" onClick={this.setBestAnswer.bind(this)}>
              <span>设为最佳回帖</span>
        </div>
      );
    }
    return (
      <div className="m-qanda-detailContent">
        <div className="content">
          <div className="item">
            <div className="uidPic">
              <img src="/build/images/uidPic2.png" />
            </div>
            <div className="uidAnswer">
              <div className="title">
                <b>{this.props.answer.author}</b>
                <i>{this.props.answer.createDate}</i>
              </div>
              <div className="answer">
                {this.props.answer.content}
              </div>
            </div>
          </div>
          <div className="uidcat"></div>
        </div>
        {setBestButton}
      </div>
    )
  }

  callback(key){
  }

  componentDidMount() {

  }
}

export default qandaDetailContent;
