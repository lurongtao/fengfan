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
      count: 10,
      pagination: {
        pageSize: 6
      },
      columns : [{
          title: '主题',
          dataIndex: 'title',
          key: 'title',
          render: (text, record) => {
            let url = ""
            switch (record.type) {
              case '视频':
                url = '/video/detail/'
                break
              case '问答':
                url = '/qanda/detail/'
                break
              case '面试题':
                url = '/interviewq/detail/'
                break
              case '招聘信息':
                url = '/job/detail/'
                break
            }
            return (<Link to={`${url}${record.id}`}>{text}</Link>)
          }
        }, {
          title: '分类',
          dataIndex: 'type',
          key: 'type',
        }, {
          title: '创建时间',
          dataIndex: 'createDate',
          key: 'createDate'
        }
      ]
    };

    // 获取数据
    this.getData({
      // start: 0,
      // count: 10
    },(res)=>{
      let listDa = this.dataProcessingFirst(res)
      this.setState({
        data: listDa,
        filterData: listDa,
        total: res.data.data.total
      });
    });
  };

  typeFilter(type) {
    return {
      'video': '视频',
      'qanda': '问答',
      'interviewq': '面试题',
      'job': '招聘信息'
    }[type]
  }

  dataProcessingFirst(res){
    let listData = res.data.data.subjects.map((value, index) => {
      return {
        id: value.id,
        key: index,
        title: value.title,
        type: this.typeFilter(value.type),
        createDate: value.createDate,
      }
    });
    return listData
  }

  getData(mes,cb) {
    Axios.get('/api/users/favorite', mes, cb);
  };

  //分页更换数据
  pageChange(page){
    this.getData({
      // start: page*this.state.count,
      // count: this.state.count
    }, (res)=>{
      // 获取数据
      console.log(res);
      let listDa = this.dataProcessingFirst(res)
      this.setState({
        data: listDa,
        filterData: listDa,
        total: res.data.data.total
      });
    })
  }

  render() {
    return (
      <div className="m-qanda-list m-favorite-list">
        <div className="nav">
          <div className="cat">
            <h1 className="title">我的收藏</h1>
          </div>
        </div>
        <div className="list">
          <Table columns={this.state.columns} dataSource={this.state.filterData} pagination={false} />
          <Pagination defaultCurrent={1} total={this.state.total?this.state.total:1} onChange={this.pageChange.bind(this)} />
        </div>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default interviewq
