import React,{Component} from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router'



class AdminHeader extends Component{


  render(){
    return (
      <div className="m-adminHeader">
        <div className="mah-container">
          <div className="logo">
            <a href="/"><img src="/build/images/logo.png" alt="锋帆logo"/></a>
          </div>
          <ul className="adminNav">
            <li>
              <Link to="/admin/users" activeClassName="active">用户管理</Link>
              <ul>
                <li><Link to="/admin/users/list">用户列表</Link></li>
                <li><Link to="/admin/users/add">用户添加</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/admin/video" activeClassName="active">视频管理</Link>
              <ul>
                <li><Link to="/admin/video/list">内容列表</Link></li>
                <li><Link to="/admin/video/add">内容添加</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/admin/job" activeClassName="active">招聘管理</Link>
              <ul>
                <li><Link to="/admin/job/list">内容列表</Link></li>
                <li><Link to="/admin/job/add">内容添加</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/admin/interviewq" activeClassName="active">面试题管理</Link>
              <ul>
                <li><Link to="/admin/interviewq/list">内容列表</Link></li>
                <li><Link to="/admin/interviewq/add">内容添加</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/admin/other" activeClassName="active">其他管理</Link>
              <ul>
                <li><Link to="/admin/other/classify">分类管理</Link></li>
                <li><Link to="/admin/other/stage">阶段管理</Link></li>
                <li><Link to="/admin/other/city">城市管理</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AdminHeader
