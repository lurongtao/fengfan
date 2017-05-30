import React,{Component} from 'react'
import { Table, Icon , Pagination} from 'antd'
import {Link} from 'react-router'
import Axios from '../../utils/axios.util'
import adminCommon from '../../utils/adminCommon'

class List extends Component{
  constructor(props){
    super(props)
    this.state={
      columns:[],
      data:[],
      count:6,
      start:0
    }
  }

  getData(params){

    let tag = this.props.tag
    let callback = (res)=>{
      let subjects = res.data.data.subjects
      let data = []
      if(tag == "users"){
        subjects.map((value,index)=>{
          data.push({
            id:value.id,
            name:value.username,
            date:value.createDate
          })
        })
      }else{
        subjects.map((value,index)=>{
          data.push({
            id:value.id,
            name:value.title,
            date:value.createDate
          })
        })
      }
      this.setState({
        data:data,
      })
    }
    Axios.get(this.props.uri, params, callback)
  }



  //分页更换数据
  pageChange(page){
    this.getData({
      start:(page-1)*this.state.count,
      count:this.state.count
    })
  }


  render(){
    return (
        <div className="listContainer">
          <div className="tit">{this.props.title}</div>
          <div className="addBtn">
            <Link to={this.props.addUrl}>添加</Link>
          </div>
          <div className="list"></div>
          <Table columns={this.props.columns} dataSource={this.state.data} pagination={false}/>
          <Pagination defaultCurrent={1} total={this.state.total?this.state.total:1}  onChange={this.pageChange.bind(this)} pageSize={6}/>
        </div>
    )
  }

  componentDidMount(){
    let tag = this.props.tag

    //列表数据
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          let total = res.data.data.total
          let data = []
          subjects.map((value,index)=>{
            if(tag == 'users'){
              data.push({
                id:value.uid,
                name:value.username,
                date:value.createDate
              })
            }else{
              data.push({
                id:value.id,
                name:value.title,
                date:value.createDate
              })
            }

          })
          this.setState({
            data:data,
            total:total
          })
    }
    let uri=this.props.uri
    adminCommon.videoList(uri,callback)
  }
}

export default List
