import React,{Component} from 'react'
import { Table, Icon , Pagination , Button} from 'antd'
import axios from '../../../utils/axios.util'
import adminCommon from '../../../utils/adminCommon'
import { message} from 'antd'


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
      data:[],
      count:6,
      start:0
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
      if(data.status == "ok"){
        //提交成功
        message.success(data.msg,1,()=>{
          this.refs.classify.value = ''
          location.reload()
        })
      }else{
        //提交失败
        message.error('添加失败，请重试')
      }
    }
    let tag = this.props.tag
    let postData
    //三种分类发送数据不同
    if(tag == "classify"){
      postData = `classify=${classify}`
    }else if(tag == "city"){
      postData = `city=${classify}`
    }else{
      postData = `stage=${classify}`
    }
    let params={
      url:this.props.info.addUri,
      method:'post',
      data:postData,
      callback:callback
    }

    if(classify){
      axios.all(params)
    }else{
      message.warning('分类不能为空')
    }

  }


  getData(params){
    let callback = (res)=>{
      let subjects = res.data.data.subjects
      let data = []
      subjects.map((value,index)=>{
        data.push({
          id:value.id,
          name:value.title,
          date:value.createDate
        })
      })
      this.setState({
        data:data
      })
    }
    let uri=this.props.info.listUri
    axios.get(uri, params, callback)
  }



  //分页更换数据
  pageChange(page){
    this.getData({
      start:(page-1)*this.state.count,
      count:this.state.count
    })
  }


  render(){
    return (
        <div className="container">
          <div className="tit">{this.props.title}</div>
          <div className="tip">分类列表</div>
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={false} />
          <Pagination defaultCurrent={1} total={this.state.total?this.state.total:1}  onChange={this.pageChange.bind(this)} pageSize={6}/>
          <div className="addTip">{this.props.info.tip}</div>
          <div className="txt"><input type="text"ref="classify" /></div>
          <Button className="subBtn" onClick={this.submit.bind(this)}>提交</Button>
        </div>
    )
  }

  componentDidMount(){
    //请求管理列表数据
    let uri=this.props.info.listUri
    let callback = (res)=>{
          let total = res.data.data.total
          let subjects = res.data.data.subjects
          let data = []
          subjects.map((value,index)=>{
            data.push({
              id:value.id,
              name:value.title,
              date:value.createDate
            })
            this.setState({
              data:data,
              total:total
            })
          })
    }
    let params={
      start:0,
      count:6
    }
    axios.get(uri,params,callback)
  }

}

export default Management
