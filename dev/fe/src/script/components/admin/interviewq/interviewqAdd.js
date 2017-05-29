import React,{Component} from 'react'
import Add from '../add'

class InterviewqAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"面试题管理/内容添加"
    }
  }

  jump(){
    //跳转操作
    this.props.router.push("/admin/interviewq/list")
  }

  render(){
    return (
      <div className="m-interviewqAdd add">
        <Add title={this.state.title} uri={"/api/interviewq/add"} tag={"interviewq"} jumpHandle={this.jump.bind(this)}></Add>
      </div>
    )
  }
}

export default InterviewqAdd
