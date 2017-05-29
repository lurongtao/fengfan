import React,{Component} from 'react'
import List from '../list'
import adminCommon from '../../../utils/adminCommon'

class VideoList extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      },
      title:"视频管理/内容列表",
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

  //视频管理修改操作
  update(id){
    this.props.router.push(`/admin/video/update/${id}`)
  }



  //视频管理删除操作
  delete(id){
    let uri = '/api/video/remove'
    let tag = 'video'
    adminCommon.delete(id,uri,tag)
  }


  render(){
    return (
      <div className="m-videoList adList">
        <List columns={this.state.columns} uri={"/api/video/list"} title={this.state.title} total={this.state.total} tag={"video"}></List>
      </div>
    )
  }


}

export default VideoList
