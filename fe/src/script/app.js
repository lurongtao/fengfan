require('../style/app.less')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import store from './redux/store'
import { Provider } from 'react-redux'

import Index from './components/Index'
import VideoList from './components/video/List'

ReactDOM.render((
  <Provider store={store().store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRedirect to="/video/list" />
        <Route path="video">
          <Route path="list" component={VideoList}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
