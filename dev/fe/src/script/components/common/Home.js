import React, {Component} from 'react'

import Axios from '../../utils/axios.util.js'

class Home extends Component {
  render() {
    Axios.get('/api/users/hassignin', {}, (res) => {
      let data = res.data.data
      if (res.data.errcode != -1 && data.status == 'has') {
        this.props.router.push('/index/list')
      } else {
        this.props.router.push('/users/signin')
      }
    })
    return null
  }
}

export default Home
