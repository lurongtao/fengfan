require('../style/app.less')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import store from './redux/store'
import { Provider } from 'react-redux'

import Index from './components/Index'
import VideoList from './components/video/List'
import QandaList from './components/qanda/qandaList'
import QandaDetail from './components/qanda/qandaDetail'
import QandaAdd from './components/qanda/qandaAdd'

import JobList from './components/job/jobList'
// import QandaDetail from './components/qanda/qandaDetail'



ReactDOM.render((
  <Provider store={store().store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRedirect to="/qanda/list" />

        {/* 视频  video*/}
        <Route path="video">
          <Route path="list" component={VideoList}></Route>
        </Route>

        {/* 问答 qanda */}
        <Route path="qanda">
          <Route path="list" component={QandaList}></Route>
          <Route path="detail/:id" component={QandaDetail}></Route>
          <Route path="add" component={QandaAdd}></Route>
        </Route>
        {/* 招聘 job*/}
        <Route path="job">
          <Route path="list" component={JobList}></Route>
          {/* <Route path="job/:id" component={QandaDetail}></Route> */}
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
