import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import IndexCommonTitle from './indexCommon'
import AxiosUtils from '../../utils/axios.util'
import Axios from 'axios'

class IndexVideoList extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[{}]
    }
  }
  push(){
    hashHistory.push('/video/detail/1')
  }
  indexVideo(list){
    return list.map((value,index)=>{
      if(index<6){
        return(
          <div className="index_vedio">
            <dl >
            <dt onClick={this.push.bind(this)}>
              <img className="background" src={value.img}/>
              <img className="video" src="/images/video.png" />
              <img className="corner" src="/images/corner.png" />
            </dt>
            <dd className="vedio_title">{value.title}</dd>
            <dd className="vedio_time">{value.createDate}</dd>
            <dd className="vedio_decription">{value.summary}</dd>
            </dl>
          </div>
        )
      }
    })
  }
  render(){
    return(
      <div className="index_list">
        <IndexCommonTitle title="推荐视频" path="video"/>
        {this.indexVideo(this.state.data)}
      </div>
    )
  }
  componentDidMount(){
    let that = this
    Axios({
      url: "api/video/list?start=0&count=100",
      method: 'get',
      data: {
        start: 0,
        count: 10
      }
    })
    .then(function(res){
      // console.log(res.data.data.subjects)
      that.setState({
        data:res.data.data.subjects
      })
    })
  }
}
export default IndexVideoList
