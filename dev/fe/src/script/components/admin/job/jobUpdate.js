import React,{Component} from 'react'
import Add from '../add'
import Update from '../update'

class JobUpdate extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"招聘管理/内容修改"
    }
  }

 jump(){
   //跳转操作
   this.props.router.push("/admin/job/list")
 }

  render(){
    return (
      <div className="m-update">
        <Update title={this.state.title} id={this.props.params.id} uriUpdate={"/api/job/update"} uriDetail={"/api/job/detail"} jumpHandle={this.jump.bind(this)} tag={"job"}></Update>
      </div>
    )
  }

}

export default JobUpdate
