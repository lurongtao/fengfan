import React,{Component} from 'react'
import SearchContent from './searchContent'
import axios from '../../utils/axios.util'
import {hashHistory} from 'react-router'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { Tabs,Input,Icon,Button,Radio} from 'antd'
const Search = Input.Search
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class SearchAction extends Component{
  constructor(props){
    super(props)
    this.state = {
      keywords: '',

      AllTotal: 0,
      VideoTotal: 0,
      QandATotal: 0,
      JobTotal: 0,

      VideoData: [],
      QandAData: [],
      JobData: []
    }
  }

  getSearchData(keywords){
    let that = this
    axios.get(
      '/api/search',
      {
        q: keywords,
        start: 0,
        count: 100
      },
      function(res){
        if (res.data.errcode != -1) {
          let data = res.data.data
          let subjects = data.subjects
          that.setState({
            VideoData: subjects.video.subjects,
            QandAData: subjects.qanda.subjects,
            JobData: subjects.job.subjects,

            AllTotal: data.total,
            VideoTotal: subjects.video.total,
            QandATotal: subjects.qanda.total,
            JobTotal: subjects.job.total,
          })
        }
      }
    )
  }

  btnSub() {
    this.getSearchData(this.refs.input.input.refs.input.value)
  }

  render(){
    return(
      <div className="m-search" >
        <div className="search_input">
          <Search
          ref='input'
          defaultValue={this.props.keywords}
          onSearch = { value => {
            this.props.onChangeKeywords({
              type: 'SET',
              keywords: value
            })
            setTimeout(function () {
              this.getSearchData.call(this)
            }.bind(this), 0)
          }}
          prefix={<Icon type="search" style={{ fontSize: 27 }} />}
          suffix=''
          />
          <Button type="primary"
            onClick={this.btnSub.bind(this)}
          >搜索</Button>
        </div>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="全站" key="1"><SearchContent parent={this} total={this.state.AllTotal} videototal={this.state.VideoTotal} qandatotal={this.state.QandATotal} jobtotal={this.state.JobTotal} videodata={this.state.VideoData} qandadata={this.state.QandAData} jobdata={this.state.JobData} tab="all"/></TabPane>
          {this.state.VideoTotal>0?(<TabPane tab="视频" key="2"><SearchContent parent={this} total={this.state.VideoTotal} videototal={this.state.VideoTotal} videodata={this.state.VideoData} title="视频" tab="video"/></TabPane>):null}
          {this.state.QandATotal>0?(<TabPane tab="问答" key="3"><SearchContent parent={this} total={this.state.QandATotal} qandatotal={this.state.QandATotal} qandadata={this.state.QandAData} title="问答" tab="qanda"/></TabPane>):null}
          {this.state.JobTotal>0?(<TabPane tab="招聘" key="4"><SearchContent parent={this} total={this.state.JobTotal} jobtotal={this.state.JobTotal} jobdata={this.state.JobData} title="招聘" tab="job"/></TabPane>):null}
        </Tabs>
      </div>
    )
  }

  componentDidUpdate(){
    if (this.state.keywords != this.props.keywords) {
      this.refs.input.input.refs.input.value = this.props.keywords
      this.getSearchData(this.props.keywords)
      this.state.keywords = this.props.keywords
    }
  }

  componentDidMount(){
    this.getSearchData(this.props.keywords)
  }
}

export default connect(
  store().mapStateToProps,
  store().mapDispatchToProps
)(SearchAction)
