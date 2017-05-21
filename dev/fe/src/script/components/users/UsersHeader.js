import React, {Component} from 'react'


export default class UsersHeader extends Component {
  render() {
    return (
      <div className="usersheader">
      	<div className="logo_box">
      		<img src="./images/login_logo.png" />
      		<img src="./images/logo_left.png" />
      		<img src="./images/logo_right.png" />
      	</div>
      	<div className="logo_name">
      		<img src="./images/login_fengfan.png"/>
      	</div>
      </div>
    )
  }
  componentDidMount() {

  }

}

