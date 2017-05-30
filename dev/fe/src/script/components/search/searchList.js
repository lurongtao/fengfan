import React,{Component} from 'react'
import { Table, Icon } from 'antd'

class SearchList extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="search_list" >
        <Table columns={this.props.columns} dataSource={this.props.data} />
      </div>
    )
  }
  componentDidMount(){

  }
}
export default SearchList
