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
  push(id){
    hashHistory.push(`/video/detail/${id}`)
  }
  indexVideo(list){
    return list.map((value,index)=>{
      if(index<6){
        return(
          <div onClick={this.push.bind(this, value.id)} className="index_vedio">
            <dl>
            <dt>
              <img className="background" src={value.img}/>
              <img className="video" src="/build/images/video.png" />
              <img className="corner" src="/build/images/corner.png" />
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
        <IndexCommonTitle title="推荐视频" path="video/list"/>
        {this.indexVideo(this.state.data)}
      </div>
    )
  }
  componentDidMount(){
    let that = this
    Axios({
      url: "api/video/list?start=0&count=10",
      method: 'get',
      data: {
        start: 0,
        count: 10
      }
    })
    .then(function(res){
      if (res.data.errcode != -1) {
        that.setState({
          data:res.data.data.subjects
        })
      }
    })
  }
}
export default IndexVideoList
