import React, {Component} from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      id:null
    }
  }
  linkTo(value,that){
    that.props.onChangeId({
      type: 'SETTITLE',
      id:value
    })
    this.props.router.push(`/search/list/${value}`)
    that.refs.input.input.refs.input.value = ''
    this.setState({
      id:value
    })
  }
  render() {
    return (
      <div className="m-index">
        <Header link={this.linkTo.bind(this)}/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
}

export default Index
