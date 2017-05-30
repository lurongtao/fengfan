import React, {Component} from 'react'

import {Link} from "react-router"

import utilAxios from "../../utils/axios.util.js"

import {hashHistory} from 'react-router'

import { message } from 'antd'

export default class Signin extends Component {
	constructor(props) {
    super(props)
 	}

	//登录功能
	signin(){
		let username = this.refs.username.value
		let password = this.refs.password.value
		let data = {
			username: username,
			password: password
		}

		utilAxios.get(
      '/api/users/signin',
			{
				username: data.username,
				password: data.password
			},
      function (res) {
      	if(res.data.errcode == -1){
					message.info(res.data.errmsg)
      	} else {
					//跳转首页
					hashHistory.push("/index/list")
      	}
      }
    )
	}

  render() {
    return (
      <div className="signin">
      	<input type="email" ref="username" placeholder="请输入用户名"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="password" placeholder="请输入密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="signin_login" onClick={this.signin.bind(this)} value="登录" />
      	<b></b>
      	<div onClick={this.gotoForgot.bind(this)}>忘记密码</div>
      </div>
    )
  }

	gotoForgot() {
		this.props.router.push(`/users/forgotpwd?username=${this.refs.username.value}`);
	}

}
