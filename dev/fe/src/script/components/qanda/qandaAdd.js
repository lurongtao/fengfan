import React from 'react'

import { Input } from 'antd';
import { Button } from 'antd';
import Axios from '../../utils/axios.util';
import Content from './qandaDetailContent';

class qandAdd extends React.Component {
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

    })
  };

  render() {
    return (
      <div className="m-qanda-detail">
          <div className="section">
            <p>提问</p>
            <div className="reply">
              <Input placeholder="标题" />
              <Input type="textarea" rows={4} placeholder="提问内容哦" ref="inputContent"/>
              <Button type="primary" onClick={this.reply.bind(this)}>发布</Button>
            </div>
          </div>
      </div>
    )
  }

  reply(){
    console.log(this.refs.inputContent.refs.input.value);
    Axios.post('/api/qanda/add', {
      uid: 4, // 用户ID [数值：必填]
      tag: "React", // 问题标签 [字符串：必填] html, css, 原生js, angular, vue,其他等等
      title: "React dangerouslySetInnerHTML 怎么用？", //标题 [字符串：必填]
      content: this.refs.inputContent.refs.input.value // 回帖内容：[字符串：必填]
    }, (res)=>{
      console.log(res.data.data);
    })
  }

  componentDidMount() {

  }
}

export default qandAdd;
