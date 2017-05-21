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
      data:[]
    }
  }

  //面试题管理修改操作
  update(id){
    this.props.router.push(`/admin/interviewq/update/${id}`)
  }



  //面试题管理删除操作
  delete(id){
    let uri = '/api/interviewq/remove'
    adminCommon.delete(id,uri)
  }

  render(){
    return (
      <div className="m-interviewqList adList">
        <List columns={this.state.columns} data={this.state.data} title={this.state.title}></List>
      </div>
    )
  }

  componentDidMount(){
    //请求面试题管理列表数据
    let uri='/api/interviewq/list'
    adminCommon.list(uri,this)
  }

}

export default InterviewqList
