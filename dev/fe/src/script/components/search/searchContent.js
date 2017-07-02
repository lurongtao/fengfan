import React,{Component} from 'react'
import SearchList from './searchList'
import axios from '../../utils/axios.util'

class SearchContent extends Component{
  constructor(props){
    super(props)
  }

  setNewDataSource(dataSource){
    let NewDataSource = []
    for(let i = 0 ; i < dataSource.length ; i++){
      NewDataSource.push({
         key: `${i+1}`,
         name: `${dataSource[i].createDate}`,
         title: `${dataSource[i].title}`,
         id: `${dataSource[i].id}`,
         city: `${dataSource[i].city}`,
         url: `${dataSource[i].url}`,
       })
    }
    return NewDataSource
  }

  setColumns(str){
    let columns = [{
      title: str,
      dataIndex: 'name',
      key: 'name',
      render:(text,record)=>(
       <span className="search_inner" onClick={this.goto.bind(this, record.id, record.city, record.url, str)}>
        <div className="search_title">{record.title}</div>
        <a className="search_article">{record.name}</a>
       </span>
      )
    }]
    return columns
  }

  goto(id, city, url, str){
    // console.log(this.props.parent);
    switch (str) {
      case '视频':
        // this.props.parent.props.router.push(`/video/detail/${id}`)
        location.href=url
        break
      case '问答':
        this.props.parent.props.router.push(`/qanda/detail/${id}`)
        break
      case '招聘':
        if (city) {
          this.props.parent.props.router.push(`/job/detail/${id}`)
        } else {
          this.props.parent.props.router.push(`/interviewq/detail/${id}`)
        }
      break
    }
  }

  render(){
    let that = this
    return(
      <div className="search_content">
        <p className="search_total">共找到<span>{ this.props.total }</span>个相关内容</p>
        {function () {
          let total = that.props.videototal
          if (total && total > 0) {
            return (
              <div>
                <SearchList title="视频" data={that.setNewDataSource.call(that,that.props.videodata)} columns={that.setColumns.call(that,'视频')}/>
              </div>
            )
          }
        }()}
        {function () {
          let total = that.props.qandatotal
          if (total && total > 0) {
            return (
              <div>
                <SearchList title="问答" data={that.setNewDataSource.call(that,that.props.qandadata)} columns={that.setColumns.call(that,'问答')}/>
              </div>
            )
          }
        }()}
        {function () {
          let total = that.props.jobtotal
          if (total && total > 0) {
            return (
              <div>
                <SearchList title="招聘" data={that.setNewDataSource.call(that,that.props.jobdata)} columns={that.setColumns.call(that,'招聘')}/>
              </div>
            )
          }
        }()}
      </div>
    )
  }

  componentDidUpdate(){

  }
}
export default SearchContent
