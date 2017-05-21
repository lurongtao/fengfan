import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../../utils/axios.util'
import { message } from 'antd'
import Management from './management'



class Stage extends Component{
  constructor(props){
    super(props)

    this.state={
      info:{
        title:"视频管理/阶段管理",
        tip:"阶段添加",
        listUri:"/api/stage/list",
        addUri:"/api/stage/add",
        removeUri:"/api/stage/remove"
      }
    }
  }



  render(){
    return (
      <div className="m-stage management">
        <Management info={this.state.info}></Management>
      </div>
    )
  }


}

export default Stage
