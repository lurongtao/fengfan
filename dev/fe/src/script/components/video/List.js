import React, {Component} from 'react'

import Axios from '../../utils/axios.util'

class Index extends Component {
  render() {
    return (
      <div className="m-video-list">
        <div className="nav">
          <ul>
            <li>分类</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>VUE</li>
          </ul>
          <ul>
            <li>阶段</li>
            <li><i>第一阶段</i></li>
            <li>第二阶段</li>
            <li>第三阶段</li>
          </ul>
        </div>
        <div className="list"></div>
      </div>
    )
  }

  componentDidMount() {
    Axios.get('/api/video/list', {
      condition: 'javascript',
      start: 0,
      count: 10
    }, (res)=>{
      console.log(res.data);
    })
  }
}

export default Index
