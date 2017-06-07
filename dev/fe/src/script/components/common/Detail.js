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
      this.setState({
        question: res.data.data,
        answers: res.data.data.answers,
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
          <img src="/build/images/uidPic.png" />
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
                超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的借鉴。超写实的图标，在设计中比较常见案例中的写实图标，给初学者一个最好的鉴。在设计中比较常见，案例中的写实。超写实的图标，在设计中比较常见案例中的写实图标给初学者一个最好的借鉴。超写实的图标在设计中比较常见，案例中的写实图标，给初学者一个最好的鉴。在设计中比较常见，案例中的写超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的借鉴。超写实的图标，在设计中比较常见，案例中的写实图标，给初学者一个最好的鉴。在设计中比较常见，案例中的写实。
              </p>
            </div>
          </div>
          <Comment  detailDatas={this.state.answers} uri={this.props.replyuri} refreshGetData={this.reGetData.bind(this)}></Comment>
        </div>

      </div>
    )
  }

  componentDidMount() {

  }
}

export default Detail;
