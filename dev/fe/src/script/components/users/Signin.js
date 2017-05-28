import React, {Component} from 'react'

import {Link} from "react-router"

import utilAxios from "../../utils/axios.util.js"

import {hashHistory} from 'react-router'

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

		// utilAxios.post({
    //   url: '/api/users/signin',
    //   method: 'get',
		// 	data: JSON.stringify(data),
    //   callback: function (res) {
    //   	if(!res.errcode){
    //   		 //存储
    //   		 localStorage.setItem('username', res.data.data.username)
    //   		 //跳转首页
    //   		 hashHistory.push("/")
    //   	}else{
    //   		//打印错误信息
    //   		console.log(res.errmsg)
    //   	}
    //   }
    // })

		utilAxios.post(
      '/api/users/signin',
			{
				username: data.username,
				password: data.password
			},
      function (res) {
				console.log(res);
      	// if(!res.errcode){
      	// 	 //存储
      	// 	 localStorage.setItem('username', res.data.data.username)
      	// 	 //跳转首页
      	// 	 hashHistory.push("/")
      	// }else{
      	// 	//打印错误信息
      	// 	console.log(res.errmsg)
      	// }
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
      	<Link to="/users/forgotpwd">忘记密码</Link>
      </div>
    )
  }

}
