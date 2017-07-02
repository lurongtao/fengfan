import React, {Component} from 'react'

import utilAxios from "../../utils/axios.util.js"

import { message } from 'antd'

import {hashHistory} from 'react-router'

export default class Resetpwd extends Component {
	constructor(props) {
    super(props)
 	}

	//修改密码功能
	repwd(){
		let username = this.refs.username.value
		let newpwd = this.refs.newpwd.value
		let confirmpwd = this.refs.confirmpwd.value

		if (username !='' && newpwd != '' && newpwd == confirmpwd) {
			utilAxios.post('/api/users/getresettoken', {}, function (res) {
				let data = res.data.data
				if (res.data.errcode != -1 && data.status == 'ok') {
					let token = data.token
					utilAxios.post(
						'/api/users/resetpwd',
						{
							username: username,
							newpwd: newpwd,
							token: token
						},
						function (res) {
							if(res.data.errcode == -1){
								message.info(res.data.errmsg)
							} else {
								//跳转登录页
								hashHistory.push("/users/signin")
							}
						}
					)
				}
			})

		} else {
			message.info('用户名及新密码不能为空 或 两次输入不一致')
		}

	}

  render() {
    return (
      <div className="resetpwd">
      	<p>修改密码</p>
      	<input type="text" ref="username" placeholder="请输入用户名"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="newpwd" placeholder="请输入新密码"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="confirmpwd" placeholder="重新输入新密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="resetpwd_btn" onClick={this.repwd.bind(this)} value="确认" />
      </div>
    )
  }

}
