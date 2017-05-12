import React from 'react';
import { Link } from 'react-router';

import { Table, Icon } from 'antd';
import { Pagination } from 'antd';
import Axios from '../../utils/axios.util';


class interviewq extends React.Component {
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
        <div className="nav">
          <div className="cat">
            <h1 className="title">标签</h1>
            <ul className="content">
              <li>PHP</li>
              <li><i>HTML5</i></li>
              <li>VUE</li>
              <li>JS</li>
            </ul>
          </div>

        </div>
        <div className="list">
          <Table columns={this.state.columns} dataSource={this.state.data} />
          {/* <Pagination defaultCurrent={1} total={50} /> */}
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

export default interviewq
