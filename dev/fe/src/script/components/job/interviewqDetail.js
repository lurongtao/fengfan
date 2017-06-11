
import {Component} from 'react'
import Detail from '../common/Detail'

class interviewqDetail extends Component {

  render(){
    return (
      <div>
        <Detail uri="api/interviewq/detail" besturi="api/interviewq/setbest" replyuri="api/interviewq/reply" that={this}></Detail>
      </div>
    )
  }
}

export default interviewqDetail
