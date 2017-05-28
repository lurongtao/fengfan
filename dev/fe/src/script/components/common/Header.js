import React, {Component} from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import store from '../../redux/store'

import Axios from '../../utils/axios.util'
import { message } from 'antd'
import {hashHistory} from 'react-router'

import { Input, Popover } from 'antd'
const Search = Input.Search

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      content: ''
    }
  }

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

        <Popover placement="topRight" title={'用户设置'} content={this.state.content} trigger="click">
          <div className="user" onClick={this.signin.bind(this)}>
            <span>
              <img src="./images/user-icon.png" />
            </span>
          </div>
        </Popover>

        <a className="search">
          <Search
            ref="input"
            placeholder="请输入关键字"
            onSearch={value => this.props.link(value, this)}
            />
        </a>
      </div>
    )
  }

  signin() {
    let that = this
    Axios.get('/mock/hassignin', {}, function (res) {
      let data = res.data.data
      if (data.status == 'has') {
        if (data.roles == '0') {
          that.setState({
            content: (
              <div>
                <p onClick={that.gotoAdmin.bind(that)}><img src="./images/user_admin.png" />后台管理</p>
                <p onClick={that.gotoResetPwd.bind(that)}><img src="./images/user_set.png" />修改密码</p>
                <p onClick={that.signout.bind(that)}><img src="./images/user_signout.png" />退出登录</p>
              </div>
            )
          })
        } else {
          that.setState({
            content: (
              <div>
                <p onClick={that.gotoFavorite.bind(that)}><img src="./images/user_info.png" />我的收藏</p>
                <p onClick={that.gotoResetPwd.bind(that)}><img src="./images/user_set.png" />修改密码</p>
                <p onClick={that.signout.bind(that)}><img src="./images/user_signout.png" />退出登录</p>
              </div>
            )
          })
        }
      } else {
        that.props.parent.props.router.push('/users/signin')
      }
    })
  }

  gotoAdmin(){
    this.props.parent.props.router.push('/admin')
  }

  gotoResetPwd() {
    this.props.parent.props.router.push('/users/resetpwd')
  }

  gotoFavorite() {
    this.props.parent.props.router.push('/users/favorite')
  }

  signout() {
    Axios.get(
      '/mock/signout', {},
      function (res) {
      	if(res.data.errcode == -1){
					message.info(res.data.errmsg)
      	} else {
          if (res.data.data.status == 'ok') {
            //跳转登录页
            hashHistory.push("/users/signin")
          } else {
            message.info(res.data.data.msg)
          }
      	}
      }
    )
  }

  componentDidUpdate(){

  }
}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(Header)
