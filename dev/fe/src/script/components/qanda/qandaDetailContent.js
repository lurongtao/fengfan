import React from 'react'

import { Input } from 'antd';
import Axios from '../../utils/axios.util';


class qandaDetailContent extends React.Component {

  setBestAnswer(){
  }

  render() {
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
        <div className="bestAnswer" onClick={this.setBestAnswer.bind(this)}>
        <span>设为最佳回帖</span>
        </div>
      </div>
    )
  }

  callback(key){
  }

  componentDidMount() {

  }
}

export default qandaDetailContent;
