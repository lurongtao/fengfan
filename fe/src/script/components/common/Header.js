import React, {Component} from 'react'

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
          <li>首页</li>
          <li >视频</li>
          <li className="active">问答</li>
          <li>招聘</li>
        </ul>
        <div className="user">
          <span>
            <img src="./images/user-icon.png" />
          </span>
          <span>3</span>
        </div>
        <div className="search">
          <Search
            placeholder="请输入关键字"
            onSearch={value => console.log(value)}
            />
        </div>
      </div>
    )
  }
}

export default Header
