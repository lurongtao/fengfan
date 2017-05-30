import React,{Component} from 'react'
import List from '../list'
import adminCommon from '../../../utils/adminCommon'

class UserList extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      },
      title:"用户管理/用户列表",
      columns:[
        {
        title: '用户名',
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

  //用户管理修改操作
  update(uid){
    this.props.router.push(`/admin/users/update/${uid}`)
  }



  //用户管理删除操作
  delete(id){
    let uri = '/api/users/remove'
    let tag = 'users'
    adminCommon.delete(id,uri,tag)
  }


  render(){
    return (
      <div className="m-usersList adList">
        <List columns={this.state.columns} uri={"/api/users/list"} title={this.state.title}
        total={this.state.total} tag={"users"} addUrl={"/admin/users/add"}></List>
      </div>
    )
  }

}

export default UserList
