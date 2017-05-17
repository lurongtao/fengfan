import React, {Component} from 'react'

import Axios from '../../utils/axios.util'

class ListContent extends Component {
  getList(){
    
  }
  render() {
    return (
      <div className="m-list-content">
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>HTML5</h1>
            <a href="">
              <img src="./images/img.png" alt=""/>
              <i></i>
            </a>
            <h2>场景的真实云彩手绘化</h2>
            <h3>2017.04.02</h3>
            <p>手绘中经常用到一些真实的照片场景，如果将照片和手绘的人物风格统一？</p>
          </li>
        </ul>
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

export default ListContent
