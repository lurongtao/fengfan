import React, {Component} from 'react'

import { Link } from 'react-router';

class ListContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      listData:[]
    }
  }

  render() {
    let List = null
    if(this.props.dataSource){
      List = this.props.dataSource.map((value,index)=>{
        return (
          <ul>
          <li>
          <h1>{value.category.tag}</h1>
          <Link to={"/video/detail/"+value.id}>
            <img src={value.img} alt=""/>
            <i></i>
          </Link>
          <h2>{value.title}</h2>
          <h3>{value.createDate}</h3>
          <p>{value.summary}</p>
          </li>
          </ul>
        )
      })
    }
    return (
      <div className="m-list-content">
        {List}
      </div>
    )
  }

  componentDidMount() {

  }
}

export default ListContent
