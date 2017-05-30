import React,{Component} from 'react'
import List from '../list'
import adminCommon from '../../../utils/adminCommon'


class InterviewqList extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      },
      title:"面试题管理/内容列表",
      columns:[
        {
        title: '标题',
        dataIndex: 'name',
        key: 'name',
        width:304,
        render: text => <a>{text}</a>,
        },
        {
          title: '日期',
          dataIndex: 'date',
          key: 'date',
          width:304,
        },
        {
        title: '操作',
        key: 'action',
        width:304,
        render: (text, record) => (
          <span>
            <a  className="update" onClick={this.update.bind(this,record.id)}>修改</a>
            <a  className="delete" onClick={this.delete.bind(this,record.id)}>删除</a>
          </span>
        ),
        }
      ],
      data:[],
      total:0
    }
  }

  //面试题管理修改操作
  update(id){
    this.props.router.push(`/admin/interviewq/update/${id}`)
  }



  //面试题管理删除操作
  delete(id){
    let uri = '/api/interviewq/remove'
    let tag = 'interviewq'
    adminCommon.delete(id,uri,tag)
  }

  render(){
    return (
      <div className="m-interviewqList adList">
        <List columns={this.state.columns} uri={"/api/interviewq/list"} title={this.state.title} total={this.state.total} tag={"interviewq"} addUrl={"/admin/interviewq/add"}></List>
      </div>
    )
  }


}

export default InterviewqList
