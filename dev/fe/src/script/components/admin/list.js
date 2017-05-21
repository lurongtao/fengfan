import React,{Component} from 'react'
import { Table, Icon , Pagination} from 'antd'


class List extends Component{
  constructor(props){
    super(props)
    this.state={
      pagination:{
        pageSize:4
      }
    }
  }



  render(){
    return (
        <div className="listContainer">
          <div className="tit">{this.props.title}</div>
          <div className="list"></div>
          <Table columns={this.props.columns} dataSource={this.props.data} pagination={this.state.pagination}/>
        </div>
    )
  }
}

export default List
