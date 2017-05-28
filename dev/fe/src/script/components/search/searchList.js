import React,{Component} from 'react'
import { Table, Icon } from 'antd'

class SearchQanda extends Component{
  constructor(props) {
    super(props)
    this.state = {
      Data: {},
      columns: [{}],
      data: [{}]
    }
  }
  render(){
    return(
      <div className="search_list" >
        <Table columns={this.props.columns} dataSource={this.props.data} />
      </div>
    )
  }
  componentDidMount(){
    // let that = this
    // console.log(this)
    // if(this){
    //   console.log(this.props.data)
    // }
    // setTimeout(function(){
    //   let dataSource = that.props.data.subjects
    //   let NewDataSource = []
    //   for(let i = 0 ; i < dataSource.length ; i ++){
    //     NewDataSource.push({
    //        key:`${i+1}`,
    //        name: `${dataSource[i].createDate}`,
    //        title:`${dataSource[i].title}`
    //      })
    //   }
      // dataSource.map((value,index)=>{
      //  NewDataSource.push({
      //     key:`${index+1}`,
      //     name: `${value.createDate}`,
      //     title:`${value.title}`
      //   })
      // })

    //   let columns=[{
    //     title:that.props.data.title,
    //     dataIndex: 'name',
    //      key: 'name',
    //      render:(text,record)=>(
    //        <span className="search_inner">
    //         <div className="search_title">{record.title}</div>
    //         <a href="#" className="search_article">{record.name}</a>
    //       </span>
    //      )
    //   }]
    //   that.setState({
    //     Data:that.props.data,
    //     data:NewDataSource,
    //     columns:columns
    //   })
    // },10)

    let title = this.props.title
    if(title=='视频'){

    }
    else {

    }
  }


}
export default SearchQanda
