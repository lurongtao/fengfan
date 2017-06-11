
import {Component} from 'react'
import Detail from '../common/Detail'
import Axios from '../../utils/axios.util';

class jobDetail extends Component {
  render(){
    return (
      <div>
        <Detail id={this.props.params.id} uri="api/job/detail" replyuri="api/job/reply" that={this}></Detail>
      </div>
    )
  }
}

export default jobDetail
