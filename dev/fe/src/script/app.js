require('../style/app.less')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import store from './redux/store'
import { Provider } from 'react-redux'

//index.js
import Index from './components/Index'
//index 主页面
import IndexList from './components/index/indexList'
//video 视频
import VideoList from './components/video/List'
import VideoDetail from './components/video/VideoDetail'
//qanda 问答
import QandaList from './components/qanda/qandaList'
import QandaDetail from './components/qanda/qandaDetail'
import QandaAdd from './components/qanda/qandaAdd'
//admin 后台
import Admin from './components/admin/admin'

import InterviewqList from './components/admin/interviewq/interviewqList'
import InterviewqAdd from './components/admin/interviewq/interviewqAdd'
import InterViewqUpdate from './components/admin/interviewq/interviewqUpdate'

import JList from './components/admin/job/jobList'
import JAdd from './components/admin/job/jobAdd'
import JobUpdate from './components/admin/job/jobUpdate'

import Vlist from './components/admin/video/videoList'
import Vadd from './components/admin/video/videoAdd'
import Vupdate from './components/admin/video/videoUpdate'

import Classify from './components/admin/management/Classify'
import Stage from './components/admin/management/stage'
import City from './components/admin/management/city'

//search 搜索
import Search from './components/search/search'

//job 招聘
import JobList from './components/job/jobList'
import JobDetail from './components/job/JobDetail'
import interviewqDetail from './components/job/interviewqDetail'
// import QandaDetail from './components/qanda/qandaDetail'

import Users from './components/users/Users'
import Signin from './components/users/Signin'
import Forgotpwd from './components/users/Forgotpwd'
import Resetpwd from './components/users/Resetpwd'

//console.log(Users)

ReactDOM.render((
  <Provider store={store().store}>
    <Router history={hashHistory}>

      <Route path="/" component={Index}>
        <IndexRedirect to="/index/list" />

        {/* 主页面 index*/}
        <Route path="index">
          <Route path="list" component={IndexList}></Route>
        </Route>


        {/* 视频  video*/}
        <Route path="video">
          <IndexRedirect to="/video/list"/>
          <Route path="list" component={VideoList}></Route>
          <Route path="detail/:id" component={VideoDetail}></Route>
        </Route>

        {/* 问答 qanda */}
        <Route path="qanda">
          <IndexRedirect to="/qanda/list" />
          <Route path="list" component={QandaList}></Route>
          <Route path="detail/:id" component={QandaDetail}></Route>
          <Route path="add" component={QandaAdd}></Route>
        </Route>

        {/* 招聘 job + 面试题 interview*/}
        <Route path="job">
          <IndexRedirect to="/job/list" />
          <Route path="list" component={JobList}></Route>
          <Route path="detail/:id" component={JobDetail}></Route>
          {/* <Route path="job/:id" component={QandaDetail}></Route> */}
        </Route>

        {/* 面试题 interview*/}
        <Route path="interviewq">
          <IndexRedirect to="/job/list" />
          <Route path="detail/:id" component={interviewqDetail}></Route>
          {/* <Route path="job/:id" component={QandaDetail}></Route> */}
        </Route>

        {/* 搜索 search*/}
        <Route path="search">
          <Route path="list(/:id)" component={Search}></Route>
        </Route>
      </Route>


      {/* 后台管理 admin*/}
      <Router path="admin" component={Admin}>
        <IndexRedirect to="/admin/video" />
        {/* 视频管理 */}
        <Route path="video">
          <IndexRedirect to="/admin/video/classify" />
          <Route path="classify" component={Classify}></Route>
          <Route path="stage" component={Stage}></Route>
          <Route path="city" component={City}></Route>
          <Route path="list" component={Vlist}></Route>
          <Route path="add" component={Vadd}></Route>
          <Route path="update/:id" component={Vupdate}></Route>
        </Route>
        {/* 招聘管理 */}
        <Route path="job">
          <IndexRedirect to="/admin/job/list" />
          <Route path="list" component={JList}></Route>
          <Route path="add" component={JAdd}></Route>
          <Route path="update/:id" component={JobUpdate}></Route>
        </Route>
        {/* 面试题管理 */}
        <Route path="interviewq">
          <IndexRedirect to="/admin/interviewq/list" />
          <Route path="list" component={InterviewqList}></Route>
          <Route path="add" component={InterviewqAdd}></Route>
          <Route path="update/:id" component={InterViewqUpdate}></Route>
        </Route>
      </Router>

       {/* 登录 users*/}
      <Route path="/users" component={Users}>
        <IndexRedirect to="signin" />
        <Route path="signin" component={Signin}></Route>
        <Route path="forgotpwd" component={Forgotpwd}></Route>
        <Route path="resetpwd" component={Resetpwd}></Route>
      </Route>

    </Router>
  </Provider>
), document.getElementById('root'))
