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
		let newpwd = this.refs.newpwd.value
		let confirmpwd = this.refs.confirmpwd.value

		if (newpwd != '' && newpwd == confirmpwd) {
			let data = {
				newpwd: newpwd
			}

			utilAxios.post(
				'/api/users/resetpwd',
				{
					// username: 'zhangsan',
					newpwd: data.newpwd
					// token: "98bba7193f200ad4ed247a28311e3b08" // TODO 前端如何取，需要确认
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
		} else {
			message.info('新密码不能为空 或 两次输入不一致')
		}

	}

  render() {
    return (
      <div className="resetpwd">
      	<p>修改密码</p>
      	<input type="password" ref="newpwd" placeholder="请输入新密码"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="confirmpwd" placeholder="重新输入新密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="resetpwd_btn" onClick={this.repwd.bind(this)} value="确认" />
      </div>
    )
  }

}
