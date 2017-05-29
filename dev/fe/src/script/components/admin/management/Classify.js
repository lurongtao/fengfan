import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../../utils/axios.util'
import { message } from 'antd'
import Management from './management'



class VideoClassify extends Component{
  constructor(props){
    super(props)
    this.state={
      info:{
        title:"视频管理/分类管理",
        tip:"分类添加",
        listUri:"/mock/api/classify/list",
        addUri:"/mock/api/classify/add",
        removeUri:"/mock/api/classify/remove"
      }
    }
  }

  render(){
    return (
      <div className="m-classify management">
        <Management info={this.state.info}></Management>
      </div>
    )
  }


}

export default VideoClassify
