
import {Component} from 'react'
import Detail from '../common/Detail'

class qandaDetail extends Component {

  render(){
    return (
      <div>
        <Detail uri="api/qanda/detail" besturi="api/qanda/setbest" replyuri="api/qanda/reply" that = {this}></Detail>
      </div>
    )
  }
}

export default qandaDetail
