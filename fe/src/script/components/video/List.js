import React, {Component} from 'react'

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import ListContent from './ListContent'

class List extends Component {
  render() {
    return (
      <div className="m-video-list">
        <div className="nav">
          <div className="cat">
            <h1 className="title">分类</h1>
            <ul className="content">
              <li>HTML/CSS</li>
              <li><i>JavaScript</i></li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>VUE</li>
            </ul>
          </div>
          <ul className="level">
            <li className="title">阶段</li>
            <li><i>第一阶段</i></li>
            <li>第二阶段</li>
            <li>第三阶段</li>
          </ul>
        </div>
        <div className="list">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="最新" key="1">
              <ListContent></ListContent>
            </TabPane>
            <TabPane tab="最热" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }

  callback(key){
    console.log(key);
  }

  componentDidMount() {

  }
}

export default List
