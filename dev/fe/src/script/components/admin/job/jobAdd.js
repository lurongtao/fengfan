import React,{Component} from 'react'
import Add from '../add'


class AdminRecruitAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"招聘管理/内容添加"
    }
  }

  jump(){
    //跳转操作
    this.props.router.push("/admin/job/list")
  }

  render(){
    return (
      <div className="m-recruitAdd add">
        <Add title={this.state.title} uri={"/api/job/add"} tag={"job"} jumpHandle={this.jump.bind(this)}></Add>
      </div>
    )
  }
}

export default AdminRecruitAdd
