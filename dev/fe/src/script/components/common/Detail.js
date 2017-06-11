import React from 'react'

import { Input } from 'antd';
import { Button } from 'antd';
import Axios from '../../utils/axios.util';
import Comment from '../common/Comment';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      question: {},
      answers: null,
      bestAnswer: null,
      CommentNodes: [1,2,3]
    }
  // 获取数据
    this.getData();
  }

//获取详情页的数据
  getData() {
    // 获取路由传参的id值
    let id = this.props.that.props.params.id
    Axios.get(this.props.uri, {
      id:id
    }, (res)=>{
      // console.log(res.data.data);

      // 寻找最佳答案
      let bestAnswer = null;
      if(res.data.data.answers) {
        for(let i in res.data.data.answers) {
          if(res.data.data.answers[i].bestAnswer) {
            bestAnswer = res.data.data.answers[i];
            break;
          }
        }
      }

      this.setState({
        question: res.data.data,
        answers: res.data.data.answers,
        bestAnswer: bestAnswer
      })
    })
  };

  reGetData(){
    this.getData()
  }

//点击收藏进行收藏帖子
  addFavorite(){
    // console.log(this.props.that.props.params.id)
  }

  render() {
    return (
      <div className="m-qanda-detail">
        <div className="photo">
          <img src="/images/uidPic.png" />
        </div>
        <div className="favorite" onClick={this.addFavorite.bind(this)}>
          <span>收藏</span>
        </div>
        <div className="main">
          <div className="article">
            <div className="author">
              <b>{this.state.question.author}</b>
              <i>{this.state.question.createDate}</i>
            </div>

            <div className="title">
              <div>{this.state.question.title}</div>
              <p>
                {this.state.question.content}
              </p>
            </div>

            <div className="content">
              <div>最佳答案</div>
              <p>
                {this.state.bestAnswer ? this.state.bestAnswer.content : ""}
              </p>
            </div>
          </div>
          <Comment id={this.props.that.props.params.id}  detailDatas={this.state.answers} uri={this.props.replyuri} refreshGetData={this.reGetData.bind(this)}></Comment>
        </div>

      </div>
    )
  }

  componentDidMount() {

  }
}

export default Detail;
