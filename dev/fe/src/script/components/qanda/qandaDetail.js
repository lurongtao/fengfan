import React from 'react'

import { Input } from 'antd';
import { Button } from 'antd';
import Axios from '../../utils/axios.util';
import Content from './qandaDetailContent';

class qandaDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      question: {},
      answers: [],
      CommentNodes: [1,2,3]
    };

    // 获取数据
    this.getData();
  };

  getData() {
    Axios.post('/api/qanda/detail', {
      uid: 34,
      id: this.props.params.id
    }, (res)=>{
      console.log(res.data.data);

      var CommentNodes = res.data.data.answers.map((comment, index) => {
        return (
          <Content answer={comment}></Content>
        )
      });

      this.setState({
        question: res.data.data,
        answers: res.data.data.answers,
        CommentNodes: CommentNodes
      });


    })
  };

  render() {
    return (
      <div className="m-qanda-detail">
        <div className="photo">
          <img src="./images/uidPic.png" />
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

          <div className="section">
            <p>回帖</p>
            <div className="reply">
              <Input type="textarea" rows={4} placeholder="大胆的回复吧" ref="inputContent"/>
              <Button type="primary" onClick={this.reply.bind(this)}>回复</Button>
            </div>
            <p>全部回帖({this.state.answers.length})</p>
            <div className="cat" />
            <div className="list">
              {this.state.CommentNodes}
            </div>
          </div>

        </div>

      </div>
    )
  }

  reply(){
    console.log(this.refs.inputContent.refs.input.value);
    Axios.post('/api/qanda/reply', {
      uid: 34, // 用户ID [数值：必填]
      qid: 10, // 问题id：[数值：必填]
      content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
    }, (res)=>{
      console.log(res.data.data);
    })
  }

  componentDidMount() {

  }
}

export default qandaDetail;
