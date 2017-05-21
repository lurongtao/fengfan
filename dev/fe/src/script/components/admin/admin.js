import React,{Component} from 'react'
import AdminHeader from '../common/adminHeader'
import Footer from '../common/Footer'

class Admin extends Component{
  render(){
    return (
      <div className="m-admin">
        <AdminHeader/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Admin
