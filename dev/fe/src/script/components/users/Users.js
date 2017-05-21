import React, {Component} from 'react'

import UsersHeader from './UsersHeader'
import UsersFooter from './UsersFooter'

export default class Users extends Component {
  render() {
    return (
      <div className="m-users">
        <UsersHeader/>
        {this.props.children}
        <UsersFooter/>
      </div>
    )
  }
  componentDidMount() {

  }

}

