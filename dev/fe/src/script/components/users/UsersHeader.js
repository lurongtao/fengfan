import React, {Component} from 'react'


export default class UsersHeader extends Component {
  render() {
    return (
      <div className="usersheader">
      	<div className="logo_box">
      		<img src="/build/images/login_logo.png" />
      		<img src="/build/images/logo_left.png" />
      		<img src="/build/images/logo_right.png" />
      	</div>
      	<div className="logo_name">
      		<img src="/build/images/login_fengfan.png"/>
      	</div>
      </div>
    )
  }
  componentDidMount() {

  }

}

