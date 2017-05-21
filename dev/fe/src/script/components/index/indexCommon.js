import react,{Component} from 'react'
import {hashHistory} from 'react-router'

class IndexCommonTitle extends Component {
  go(path){
    console.log(hashHistory)
    hashHistory.push(`/${path}/list/`)
  }
  render(){
    return(
      <div className="index_title">
        <p>{this.props.title}</p>
        <span onClick={this.go.bind(this,this.props.path)}>更多</span>
      </div>
    )
  }
}
export default IndexCommonTitle
