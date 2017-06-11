import React,{Component} from 'react'
import AdminHeader from '../common/adminHeader'
import Footer from '../common/Footer'
import Axios from '../../utils/axios.util'

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
  componentWillMount() {
    let that = this
    Axios.get('/api/users/hassignin', {}, function (res) {
      let data = res.data.data
      if (data.status == 'has') {
        if (data.roles == '0') {

        } else {
          location.href="/"
        }
      } else {
        location.href="/"
      }
    })
  }
}

export default Admin
