import React,{Component} from 'react'
import IndexBanner from './indexbanner'
import IndexVideo from './indexVideo'
import IndexNews from './indexNews'

class IndexList extends Component{
  render(){
    return(
      <div className="m-indexlist">
        <IndexBanner />
        <IndexVideo />
        <IndexNews />
      </div>
    )
  }
  componentDidMount(){
    // console.log(localStorage.getItem('username'))

  }
}
export default IndexList
