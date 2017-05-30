import React, {Component} from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

import {hashHistory} from 'react-router'

import Axios from '../utils/axios.util.js'

class Index extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="m-index">
        <Header parent={this} />
        {this.props.children}
        <Footer />
      </div>
    )
  }

  componentDidMount() {
    Axios.get('/api/users/hassignin', {}, (res) => {
      let data = res.data.data
      if (res.data.errcode != -1 && data.status == 'has') {
        if (this.props.router.location.pathname == '/index/list') {
          this.props.router.push('/index/list')
        }
      } else {
        this.props.router.push('/users/signin')
      }
    })
  }

  componentDidUpdate() {

  }
}

export default Index
