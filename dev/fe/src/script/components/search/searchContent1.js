import React,{Component} from 'react'
import SearchList from './searchList'

class SearchContent1 extends Component{
  render(){
    return(
      <div className="search_content">
        <p className="search_total">共找到<span>2</span>个相关内容</p>
        <SearchList  title={this.props.title}/>
      </div>
    )
  }
  componentDidMount(){

  }
}
export default SearchContent1
