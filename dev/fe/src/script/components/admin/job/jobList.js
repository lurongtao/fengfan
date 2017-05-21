import React,{Component} from 'react'
import List from '../list'
import adminCommon from '../../../utils/adminCommon'

class recruitList extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      },
      title:"招聘管理/内容列表",
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

  //招聘管理修改操作
  update(id){
    this.props.router.push(`/admin/job/update/${id}`)
  }



  //招聘管理删除操作
  delete(id){
    let uri = '/api/job/remove'
    adminCommon.delete(id,uri)
  }


  render(){
    return (
      <div className="m-recruitList adList">
        <List columns={this.state.columns} data={this.state.data} title={this.state.title}></List>
      </div>
    )
  }

  componentDidMount(){
    //请求招聘管理列表数据
    let uri='/api/job/list'
    adminCommon.list(uri,this)
  }
}

export default recruitList
