import React, {Component} from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import store from '../../redux/store'

import { Input } from 'antd'
const Search = Input.Search

class Header extends Component {

  render() {
    return (
      <div className="m-header">
        <div className="logo">
          <img src="./images/logo.png" alt="锋帆"/>
        </div>
        <ul className="nav">
          <li><Link to="/index/list" activeClassName="active">首页</Link></li>
          <li><Link to="/video" activeClassName="active">视频</Link></li>
          <li><Link to="/qanda" activeClassName="active">问答</Link></li>
          <li><Link to={"/job"||"/interviewq"} activeClassName="active">招聘</Link></li>
        </ul>
        <div className="user" onClick={this.signin.bind(this)}>
          <span>
            <img src="./images/user-icon.png" />
          </span>
        </div>
        <a className="search">
          <Search
            ref="input"
            placeholder="请输入关键字"
            onSearch={value => this.props.link(value,this)}
            />
        </a>
      </div>
    )
  }

  signin() {
    this.props.parent.props.router.push('/users/signin')
  }

  componentDidUpdate(){

  }
}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(Header)
