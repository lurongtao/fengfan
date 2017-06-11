import React, {Component} from 'react'

import { Input, message } from 'antd';
import { Button } from 'antd';
import Axios from '../../utils/axios.util';

import VideoComment from '../common/Comment';

class VideoDetail extends Component{

  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      question: {},
      answers: null,
      CommentNodes: [1,2,3]
    };

    // 获取数据
    this.getData();
  };

  getData() {
    Axios.post('/api/video/detail', {
      id: this.props.params.id
    }, (res)=>{
      // console.log(res.data.data);
      this.setState({
        question: res.data.data,
        answers: res.data.data.QandA,
      });

    })
  };

  //点击收藏进行收藏帖子
  addFavorite(){
    let type = this.props.router.location.pathname.split('/')[1]
    Axios.post('/api/favorite', {
      id: this.props.params.id, // 内容id
      type: type
    }, (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        message.info(data.msg)
      }else{
        message.error('收藏失败，请重试')
      }
    })
  }

  render(){
    return (
      <div className="videoDetailSection">
        <div className="video-area">
          <h2>
            <div>
              {this.state.question.title}
            </div>
            <div className="favorite" onClick={this.addFavorite.bind(this)}>
              <span>收藏</span>
            </div>
          </h2>
          <div className="video">
            <img src={this.state.question.img}/>
          </div>
        </div>
        <VideoComment id={this.props.params.id} detailDatas={this.state.answers?this.state.answers:null} uri="api/video/qanda" refreshGetData={this.getData.bind(this)}></VideoComment>
      </div>
    )
  }



}

  export default VideoDetail
