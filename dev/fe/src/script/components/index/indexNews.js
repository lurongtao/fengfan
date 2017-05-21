import React,{Component} from 'react'
import IndexNewsList from './indexNewsList'

class IndexNews extends Component{
  render(){
    return(
      <ul className="index_news">
        <IndexNewsList title="最新问答" tabs="qanda"/>
        <IndexNewsList title="最新面试题" tabs="interviewq"/>
        <IndexNewsList title="最新招聘信息" tabs="job"/>
      </ul>
    )
  }
}
export default IndexNews
