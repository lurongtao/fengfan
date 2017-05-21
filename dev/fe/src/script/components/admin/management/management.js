import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../../utils/axios.util'
import adminCommon from '../../../utils/adminCommon'
import { message } from 'antd'


class Management extends Component{
  constructor(props){
    super(props)
    this.state={
      columns:[
        {
        title: '分类信息',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        },
        {
        title: '删除',
        key: 'action',
        render: (text, record) => (
          <span>
            <a  className="delete" onClick={this.delete.bind(this,record.id)}>X</a>
          </span>
        ),
        }
      ],
      data:[]
    }
  }

  //删除分类操作
  delete(id){
    let uri = this.props.info.removeUri
    adminCommon.delete(id,uri)
  }

  //分类添加操作
  submit(){
    let classify = this.refs.classify.value

    let callback = (res)=>{

      let data = res.data.data

      if(data.msg == "数据提交成功" && data.status == "ok"){
        //提交成功
        message.success('添加成功')
        this.refs.classify.value = ''
      }else{
        //提交失败
        message.error('添加失败，请重试')
      }

    }

    let params={
      url:this.props.info.addUri,
      method:'post',
      data:classify,
      callback:callback
    }

    if(classify){
      axios.lgypost(params)
    }else{
      message.warning('分类不能为空')
    }

  }




  render(){
    return (
        <div className="container">
          <div className="tit">{this.props.title}</div>
          <div className="tip">分类列表</div>
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={false} />
          <div className="addTip">{this.props.info.tip}</div>
          <div className="txt"><input type="text"ref="classify" /></div>
          <Button className="subBtn" onClick={this.submit.bind(this)}>提交</Button>
        </div>
    )
  }

  componentDidMount(){
    //请求视频管理分类数据
    let uri=this.props.info.listUri
    adminCommon.list(uri,this)
  }

}

export default Management
