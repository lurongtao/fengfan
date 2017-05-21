import React,{Component} from 'react'
import Add from '../add'

class InterviewqAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      title:"面试题管理/内容添加"
    }
  }



  render(){
    return (
      <div className="m-interviewqAdd add">
        <Add title={this.state.title} uri={"/api/interviewq/add"} tag={"interviewq"}></Add>
      </div>
    )
  }
}

export default InterviewqAdd
