import React, {Component} from 'react'

import { Input } from 'antd';
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
        answers: res.data.data.answers,
      });

    })
  };
  render(){
    return (
      <div className="videoDetailSection">
        <div className="video-area">
          <h2>如何做好一个拟物类图标</h2>
          <div className="video">
            <img src="/images/Videodemo.jpg"/>
          </div>
        </div>
        <VideoComment detailDatas={this.state.answers?this.state.answers:null} uri="api/video/qanda"></VideoComment>
      </div>
    )
  }



}

  export default VideoDetail
