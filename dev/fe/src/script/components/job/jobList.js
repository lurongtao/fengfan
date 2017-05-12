import React from 'react';
import { Link } from 'react-router';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Table, Icon } from 'antd';
import { Pagination } from 'antd';
import Axios from '../../utils/axios.util';

import Interviewq from './interviewq';
import ListContent from '../video/ListContent'

class jobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns : [{
        title: '主题',
        dataIndex: 'title',
        key: 'title',
        // render: (text, record) => <a href="">{text},{record.id}</a>,
        render: (text, record) => <Link to={`qanda/detail/${record.id}`}>{record.id}-{text}</Link>,
      }, {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      }, {
        title: '发布时间',
        dataIndex: 'createDate',
        key: 'createDate',
      },
      {
        title: '点击()/回帖()',
        dataIndex: 'action',
        key: 'action',
      }
    ],
    };

    // 获取数据
    this.getData();
  };

  getData() {
    Axios.get('/api/qanda/list', {
      condition: 'react',
      start: 0,
      count: 10
    }, (res)=>{
      console.log(res.data.data);

      var listData = res.data.data.subjects.map((comment, index) => {
        return {
          id: comment.id,
          key: index,
          title: comment.title,
          author: comment.author,
          createDate: comment.createDate,
          action: comment.hits + '/' + comment.answers,
        }
      });
      console.log(listData);

      this.setState({
        data: listData
      });

    })
  };

  render() {
    return (
      <div className="m-qanda-list">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="面试题" key="1">
            <Interviewq></Interviewq>
          </TabPane>
          <TabPane tab="招聘信息" key="2">
            <ListContent></ListContent>
          </TabPane>
        </Tabs>
      </div>
    )
  }

  callback(key){
    console.log(key);
  }

  componentDidMount() {

  }
}

export default jobList
