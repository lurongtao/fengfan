
import {Component} from 'react'
import Detail from '../common/Detail'

class jobDetail extends Component {

  render(){
    return (
      <div>
        <Detail uri="api/job/detail" replyuri="api/job/reply" that={this}></Detail>
      </div>
    )
  }
}

export default jobDetail
