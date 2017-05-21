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
          <img src="./images/logo.png" alt="锋帆logo"/>
        </div>
        <ul className="nav">
          <li><Link to="/index/list" activeClassName="active">首页</Link></li>
          <li><Link to="/video" activeClassName="active">视频</Link></li>
          <li><Link to="/qanda" activeClassName="active">问答</Link></li>
          <li><Link to={"/job"||"/interviewq"} activeClassName="active">招聘</Link></li>
        </ul>
        <div className="user">
          <span>
            <img src="./images/user-icon.png" />
          </span>
          <span>3</span>
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
  componentDidUpdate(){
    // console.log(this.refs.input.input.refs.input.value)


  }
}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(Header)
