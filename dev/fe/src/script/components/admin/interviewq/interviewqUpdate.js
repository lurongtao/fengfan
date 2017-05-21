import React,{Component} from 'react'
import Add from '../add'
import Update from '../update'

class InterViewqUpdate extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"面试题管理/内容修改"
    }
  }


  jump(){
    //跳转操作
    this.props.router.push("/admin/interviewq/list")
  }

  render(){
    return (
      <div className="m-update">
        <Update title={this.state.title} id={this.props.params.id} uriUpdate={"/api/interviewq/update"} uriList={"/api/interviewq/list"} jumpHandle={this.jump.bind(this)} tag={"interviewq"}></Update>
      </div>
    )
  }
}

export default InterViewqUpdate
