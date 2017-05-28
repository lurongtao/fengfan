import React,{Component} from 'react'
import SearchContent from './searchContent'
import SearchContent1 from './searchContent1'
import axios from '../../utils/axios.util'
import {hashHistory} from 'react-router'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { Tabs,Input,Icon,Button,Radio} from 'antd'
const Search = Input.Search
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class SearchList extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchBody: this.props.params.id,
      searchData: {}
    }
  }
  getId(){
    let id = this.refs.input.input.refs.input.value
    hashHistory.push(`/search/list/${id}`)
    this.setState({
      searchBody: this.props.params.id
    })
    this.getSearchData(id)
  }
  getSearchData(id){
    let that = this
    axios.all(
      {
        url: '/mock/api/search',
        method: 'get',
        data: {
          query:id,
          start:0,
          count:10
        },
        callback: function(res){

          //total 总共内容数量的变化

          // let totalNum = 0
          // let videoData = res.data.data.subjects.video
          //
          //   totalNum = res.data.data.total
          //
          //   totalNum = res.data.data.subjects[tab].total
          //
          // let video = res.data.data.subjects.video.subjects
          // let job = res.data.data.subjects.job.subjects
          // let qanda = res.data.data.subjects.qanda.subjects

          // that.setState({
          //   searchData:{
          //     total:totalNum,
          //     videoData:video,
          //     jobData:job,
          //     qandaData:qanda
          //   }
          // })
          // console.log(video)
          that.setState({
            searchData: res
          })
          // console.log(that.state.searchData)

        }
      })
  }
  render(){

    return(
      <div className="m-search" >
        <div className="search_input">
          <Search
          ref='input'
          defaultValue={this.state.searchBody}
          onSearch={value => this.getId.call(this)}
          prefix={<Icon type="search" style={{ fontSize: 27 }} />}
          suffix=''
          />
          <Button type="primary"
            onClick={this.getId.bind(this)}
          >搜索</Button>
        </div>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="全站" key="1"><SearchContent data={this.state.searchData} id={this.state.searchBody} tab="all"/></TabPane>
          <TabPane tab="视频" key="2"><SearchContent data={this.state.searchData} id={this.state.searchBody} title="视频" tab="video"/></TabPane>
          <TabPane tab="问答" key="3"><SearchContent data={this.state.searchData} id={this.state.searchBody} title="问答" tab="qanda"/></TabPane>
          <TabPane tab="招聘" key="4"><SearchContent data={this.state.searchData} id={this.state.searchBody} title="招聘" tab="job"/></TabPane>
        </Tabs>
      </div>
    )
  }
  componentDidUpdate(){

  }
  componentWillMount(){
    this.getSearchData(this.props.params.id)
  }
}
export default SearchList
