import React, {Component} from 'react'


export default class Resetpwd extends Component {
	constructor(props) {
    	super(props)
 	 }
	//重置密码功能
	repwd(){
		let newpwd = this.refs.newpwd.value
		//username先写固定的，后续从localStorage里面取出来
		let data = {
			username:"zhangsan",
			newpwd:newpwd
		}
		//目前接口有问题，只是做了逻辑的处理
		utilAxios.lgypost({
        url: '/api/users/resetpwd',
        method: 'post',
//      data: `username=${this.username}&password=${this.password}`,
				data:JSON.stringify(data),
        callback: function (res) {
        	console.log(res)
        	if(res.errcode){
        		//成功的情况下，密码已修改，请重新登录
        		console.log(res.data.msg)
        		 //跳转重置密码
        		 hashHistory.push("/users/signin")
        	}else{
        		//打印错误信息
        		console.log(res.errmsg)
        	}
        }
      })		
	}
	
	
	
  render() {
    return (
      <div className="resetpwd">
      	<p>重置密码</p>
      	<input type="password" ref="newpwd" placeholder="请输入新密码"/>
      	<span className="signin_xian"></span>
      	<input type="password" ref="confirmpwd" placeholder="请确认新密码"/>
      	<span className="signin_xian"></span>
      	<input type="button" className="resetpwd_btn" onClick={this.repwd.bind(this)} value="确认" />
      </div>
    )
  }


}

