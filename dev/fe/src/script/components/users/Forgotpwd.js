import React, {Component} from 'react'

import utilAxios from "../../utils/axios.util.js"

import {hashHistory} from 'react-router'

import { message } from 'antd'

export default class Forgotpwd extends Component {
	constructor(props) {
  	super(props)
		this.state = {
			username: this.props.location.query.username
		}
 	}

 	//找回密码功能
 	fotpwd(){
		//获取输入的邮箱地址
		let forgotemail = this.refs.forgotemail.value
		let username = this.refs.username.value

		let data = {
			username: username,
			email: forgotemail
		}

		utilAxios.post(
      '/api/users/forgotpwd',
			{
				username: data.username,
				email: data.email
			},
      function (res) {
				if(res.data.errcode == -1){
					message.info(res.data.errmsg)
      	} else {
					//跳转首页
					hashHistory.push("/users/signin")
      	}
      }
    )
 	}

  render() {
    return (
      <div className="forgotpwd">
      	<p>找回密码</p>
				<input type="email" ref="username" placeholder="请输入用户名"/>
	      <span className="signin_xian"></span>
      	<input type="email" ref="forgotemail" placeholder="请输入邮箱地址"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="forgotpwd_btn" onClick={this.fotpwd.bind(this)} value="确认" />
      </div>
    )
  }

	componentDidMount() {
		this.refs.username.value = this.state.username
	}
}
