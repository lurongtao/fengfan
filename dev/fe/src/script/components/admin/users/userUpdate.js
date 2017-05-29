import React,{Component} from 'react'
import { Input } from 'antd'
import axios from '../../../utils/axios.util'
import adminCommon from '../../../utils/adminCommon'
import { Select , message , Cascader } from 'antd'

import Qs from 'qs'
const Option = Select.Option



class UserUpdate extends Component{
  constructor(props){
    super(props)
    this.state={
      // roles:[],
      // rolesValue:'',
      // options:[]
    }
  }

  //修改提交操作
  submit(){

    let id = this.props.params.id
    let username = this.refs.username.value//用户名
    let pwd = this.refs.pwd.value//用户密码
    // let roles = this.state.rolesValue//用户角色

    let callback = (res)=>{
      let data = res.data.data
      if(data.status == "ok"){
        //提交成功
        message.success(data.msg,1,()=>{
          this.props.router.push('/admin/users/list')
        })
      }else{
        //提交失败
        message.error('提交失败，请重试')
      }
    }

    let data = {
      uid:id,
      username:username,
      password:pwd,
      // roles:roles
    }
    let params = {
      url:'/api/users/update',
      method:'post',
      data:Qs.stringify(data),
      callback:callback
    }
    // if(!roles || !pwd){
    if(!pwd){
      message.warning('请填写完整')
    }else{
        axios.lgypost(params)
    }
  }

  // onChange(value){
  //   let roles = value.join('-')
  //   this.setState({
  //     rolesValue:roles
  //   })
  // }

  // <div className="user">
  //   <Cascader options={this.state.options} onChange={this.onChange.bind(this)} placeholder="请选择角色" />
  // </div>
  render(){
    return (
      <div className="m-userAdd">
        <div className="container">
          <div className="tit">用户管理/用户添加</div>
          <div className="addCon">
            <div className="addName">
              <input type="text" placeholder="用户名" ref="username" disabled="disabled"/>
            </div>
            <div className="password">
              <input type="text" placeholder="用户密码" ref="pwd"/>
            </div>
            <button className="subBtn"  onClick={this.submit.bind(this)}>提交</button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){

    // let uri = '/api/stage/list'
    // let callback = (res)=>{
    //   let data = res.data.data.subjects
    //   let arr = []
    //   data.map((value,index)=>{
    //     arr.push({
    //       value:value.id,
    //       label:value.title
    //     })
    //   })
    //   let options = [
    //     {
    //       value: '0',
    //       label: '管理员',
    //     },
    //     {
    //       value: '1',
    //       label: '讲师',
    //     },
    //     {
    //       value: '2',
    //       label: '学员',
    //       children: [
    //         {
    //          value: '1',
    //          label: '未毕业学员',
    //          children:arr
    //         },
    //         {
    //          value: '2',
    //          label: '已毕业学员',
    //          children:[
    //            {
    //              value:'1',
    //              label:'已过试用期',
    //            },
    //            {
    //              value:'2',
    //              label:'未过试用期',
    //            }
    //          ]
    //         }
    //      ]
    //     }
    //   ]
    //   this.setState({
    //     options:options
    //   })
    // }
    // let params = {}
    // axios.get(uri,params,callback)

    let id = this.props.params.id

    let cb = (res)=>{
      let subjects = res.data.data.subjects
      subjects.map((value,index)=>{
        if(value.uid == id){
          this.refs.username.value = value.username
          this.refs.pwd.value = value.password
        }
      })
    }

    let listUri='/api/users/list'
    adminCommon.videoList(listUri,cb)
  }

}



export default UserUpdate
