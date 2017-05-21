import React, {Component} from 'react'

import utilAxios from "../../utils/axios.util.js"

export default class Forgotpwd extends Component {
	constructor(props) {
    	super(props)
 	 }
 	 
 	 //找回密码功能
 	fotpwd(){
		//获取输入的邮箱地址
		let forgotemail = this.refs.forgotemail.value
		//发送的对象有问题(老师再与后端接口协商)
		let data = {
			username:"zhangsan",
			email:forgotemail
		}
		//目前接口有问题，只是做了逻辑的处理
		utilAxios.lgypost({
        url: '/api/users/forgotpwd',
        method: 'post',
//      data: `username=${this.username}&password=${this.password}`,
		data:JSON.stringify(data),
        callback: function (res) {
        	console.log(res)
        	if(res.errcode){
        		//成功的情况下，已给您发送邮件，请查收
        		console.log(res.data.msg)
        		 //跳转重置密码
        		 hashHistory.push("/users/resetpwd")
        	}else{
        		//打印错误信息
        		console.log(res.errmsg)
        	}
        }
      })		
 	}
 	 
	
  render() {
    return (
      <div className="forgotpwd">
      	<p>找回密码</p>
      	<input type="email" ref="forgotemail" placeholder="请输入邮箱地址"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="forgotpwd_btn" onClick={this.fotpwd.bind(this)} value="确认" />
      </div>
    )
  }
  
}

