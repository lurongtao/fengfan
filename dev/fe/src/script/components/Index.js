import React, {Component} from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

class Index extends Component {
  render() {
    return (
      <div className="m-index">
        <Header />
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
