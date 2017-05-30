import React,{Component} from 'react'
import IndexNewsList from './indexNewsList'

class IndexNews extends Component{
  render(){
    return(
      <ul className="index_news">
        <IndexNewsList title="最新问答" tabs="qanda" path="qanda/list"/>
        <IndexNewsList title="最新面试题" tabs="interviewq" path="job/list?activeKey=1"/>
        <IndexNewsList title="最新招聘信息" tabs="job" path="job/list?activeKey=2"/>
      </ul>
    )
  }
}
export default IndexNews
