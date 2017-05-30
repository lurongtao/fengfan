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

          <Link to={"/video/detail/"+value.id} className="video_wrap">
            <dl>
            <dt>
              <img className="background" src={value.img}/>
              <img className="video" src="./images/video.png" />
              <img className="corner" src="./images/corner.png" />
            </dt>
            <dd className="vedio_title">{value.title}</dd>
            <dd className="vedio_time">{value.createDate}</dd>
            <dd className="vedio_decription">{value.summary}</dd>
            </dl>
          </Link>
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
