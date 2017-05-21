import React, {Component} from 'react'

import {Link} from "react-router"

import utilAxios from "../../utils/axios.util.js"

import {hashHistory} from 'react-router'
//console.log(hashHistory)//ok

export default class Signin extends Component {
	constructor(props) {
    	super(props)
//  this.state = {
//    username: localStorage.getItem('username')
//  }
 	 }
	//登录功能
	login(){
//		console.log(this)
		let usersemail= this.refs.usersemail.value
		let userspwd = this.refs.userspwd.value
		let data = {
			username:usersemail,
			password:userspwd
		}
		//目前接口有问题，只是做了逻辑的处理
		utilAxios.lgypost({
        url: '/api/users/signin?username=zhangsan123&password=abc123',
        method: 'get',
//      data: `username=${this.username}&password=${this.password}`,
		data:JSON.stringify(data),
        callback: function (res) {
        	// console.log(res)
					// console.log(res.errcode)
        	if(!res.errcode){
        		//存储
        		 localStorage.setItem('username', res.data.data.username)
        		 //跳转首页
        		 hashHistory.push("/")
        	}else{
        		//打印错误信息
        		console.log(res.errmsg)
        	}

        }
      })

	}

  render() {
    return (
      <div className="signin">
      	<input type="email" ref="usersemail" placeholder="请输入登录邮箱"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="userspwd" placeholder="请输入登录密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="signin_login" onClick={this.login.bind(this)} value="登录" />
      	<b></b>
      	<Link to="/users/forgotpwd">忘记密码</Link>
      </div>
    )
  }


}
