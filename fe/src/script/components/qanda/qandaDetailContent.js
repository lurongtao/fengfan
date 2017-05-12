import React from 'react'

import { Input } from 'antd';
import Axios from '../../utils/axios.util';


class qandaDetailContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // columns: [],
      content: [],
    };

    // 获取数据
    // this.getData();
  };

  getData() {
    Axios.get('/api/qanda/detail', {
      // uid: 34,
      // id: this.props.params.id
    }, (res)=>{
      console.log(res.data.data);

      this.setState({
        // detailData: detailData
      });
    })
  };

  render() {
    return (
      <div className="m-qanda-detailContent">
        <div className="content">
          <div className="item">
            <div className="uidPic">
              <img src="./images/uidPic2.png" />
            </div>
            <div className="uidAnswer">
              <div className="title">
                <b>{this.props.answer.author}</b>
                <i>{this.props.answer.createDate}</i>
              </div>
              <div className="answer">
                {this.props.answer.content}
              </div>
            </div>
          </div>
          <div className="uidcat"></div>
        </div>
      </div>
    )
  }

  callback(key){
    console.log(key);
  }

  componentDidMount() {

  }
}

export default qandaDetailContent;
