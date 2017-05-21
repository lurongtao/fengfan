import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../../utils/axios.util'
import { message } from 'antd'
import Management from './management'



class City extends Component{
  constructor(props){
    super(props)

    this.state={
      info:{
        title:"城市管理",
        tip:"城市添加",
        listUri:"/api/city/list",
        addUri:"/api/city/add",
        removeUri:"/api/city/remove"
      }
    }
  }



  render(){
    return (
      <div className="m-city management">
        <Management info={this.state.info}></Management>
      </div>
    )
  }


}

export default City
