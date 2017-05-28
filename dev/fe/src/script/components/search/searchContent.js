import React,{Component} from 'react'
import SearchList from './searchList'
import axios from '../../utils/axios.util'

class SearchContent extends Component{
  constructor(props){
    super(props)
    this.state={
      isShow:{
        "all":false,
        "video":false,
        "qanda":false,
        "job":false
      },
      res: this.props.data?this.props.data:null,
      total: 0,
      videoData: null,
      jobData: null,
      qandaData: null,
      videoColumns: null,
      jobColumns: null,
      qandaColumns: null,
    }
  }

  setNewDataSource(dataSource){
    let NewDataSource = []
    for(let i = 0 ; i < dataSource.length ; i ++){
      NewDataSource.push({
         key:`${i+1}`,
         name: `${dataSource[i].createDate}`,
         title:`${dataSource[i].title}`
       })
    }
    return NewDataSource
  }

  setColumns(str){
    let columns = [{
      title:str,
      dataIndex: 'name',
       key: 'name',
       render:(text,record)=>(
         <span className="search_inner">
          <div className="search_title">{record.title}</div>
          <a href="#" className="search_article">{record.name}</a>
        </span>
       )
    }]
    return columns
  }

  render(){
    return(
      <div className="search_content">
        <p className="search_total">共找到<span>{this.state.total}</span>个相关内容</p>
        <div className={this.state.isShow.video?'':'hide'}>
          <SearchList ref="video" title="视频" data={this.state.videoData} columns={this.state.videoColumns}/>
        </div>
        <div className={this.state.isShow.qanda?'':'hide'}>
          <SearchList ref="qanda" title="问答" data={this.state.qandaData} columns={this.state.qandaColumns}/>
        </div>
        <div className={this.state.isShow.job?'':'hide'}>
          <SearchList ref="job" title="招聘"  data={this.state.jobData} columns={this.state.jobColumns}/>
        </div>
      </div>
    )
  }

  componentDidMount(){
    let that = this
    let tab = this.props.tab
    let query = this.props.data

    let object ={
      "all":false,
      "video":false,
      "qanda":false,
      "job":false
    }

    let objectall = {
      "all":true,
      "video":true,
      "qanda":true,
      "job":true
    }

    //不是all 按照tab改变为true
    object[tab] = true
    //all时 全部是true
    if(tab=='all') {
      object = objectall
    }

    axios.all({
      url: 'mock/api/search',
      method: 'get',
      data:{
        query:query,
        start:0,
        count:10
      },
      callback:function(res){
        //total 总共内容数量的变化
        let totalNum = 0
        let videoData = res.data.data.subjects.video

        if(tab=='all'){
          totalNum = res.data.data.total
        }else {
          totalNum = res.data.data.subjects[tab].total
        }

        let video = res.data.data.subjects.video.subjects
        let job = res.data.data.subjects.job.subjects
        let qanda = res.data.data.subjects.qanda.subjects

        that.setState({
          isShow: object,
          total: totalNum,
          videoData: that.setNewDataSource(video),
          jobData: that.setNewDataSource(job),
          qandaData: that.setNewDataSource(qanda),
          videoColumns: that.setColumns('视频'),
          jobColumns: that.setColumns('招聘'),
          qandaColumns: that.setColumns('问答')
        })
      }
    })
  }
}
export default SearchContent
