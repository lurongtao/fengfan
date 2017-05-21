import axios from './axios.util'
import { message} from 'antd'
import { Modal } from 'antd'
const confirm = Modal.confirm



export default {
  //请求分类列表,阶段列表,招聘管理列表,面试题管理列表数据
  list:(uri,that)=>{
    let callback = (res)=>{
          let subjects = res.data.data.subjects
          let data = []
          subjects.map((value,index)=>{
            data.push({
              id:value.id,
              name:value.title,
              date:value.createDate
            })
            that.setState({
              data:data
            })
          })
    }
    let params={}
    axios.get(uri,params,callback)
  },
  //请求列表数据
  videoList:(uri,callback)=>{
    let params={}
    axios.get(uri,params,callback)
  },
  //删除操作
  delete:(id,uri)=>{
    let callback = (res)=>{
          let data = res.data.data
          if(data.status == "ok"){
            //删除成功
            message.success(data.msg);
          }else{
            //删除失败
            message.success('删除失败，请重试');
          }
        }
    let params = {
      url:uri,
      method:'post',
      data:`id=${id}`,
      callback:callback
    }
    confirm({
      title: '是否删除此项?',
      content: '确认请点击确认,否则请点击取消',
      onOk() {
        axios.lgypost(params)
      }
    })
  },
  //请求分类数据
  classify:(that)=>{
    let uri ='/api/classify/list'
    let callback = (res)=>{
      let arr = []
      res.data.data.subjects.map((value,i)=>{
        arr.push(<Option key={value.title}>{value.title}</Option>)
      })
      that.setState({
        classify:arr
      })
    }
    let params = {
      url:uri,
      method:'get',
      callback:callback
    }
    axios.lgypost(params)
  },
  //请求阶段数据
  stage:(that)=>{
    let uri ='/api/stage/list'
    let callback = (res)=>{
      let arr = []
      res.data.data.subjects.map((value,i)=>{
        arr.push(<Option key={value.step}>{value.title}</Option>)
      })
      that.setState({
        stage:arr
      })
    }
    let params = {
      url:uri,
      method:'get',
      callback:callback
    }
    axios.lgypost(params)
  },
  //请求城市数据
  city:(that)=>{
    let uri ='/api/city/list'
    let callback = (res)=>{
      let arr = []
      res.data.data.subjects.map((value,i)=>{
        arr.push(<Option key={value.title}>{value.title}</Option>)
      })
      that.setState({
        city:arr
      })
    }
    let params = {
      url:uri,
      method:'get',
      callback:callback
    }
    axios.lgypost(params)
  },
  //请求job和interview列表数据
  commonList:(uri,that)=>{
    let callback = (res)=>{
      let data = []
      res.data.data.subjects.map((value,index)=>{
        data.push(value)
      })
      that.setState({
        data:data
      })
    }
    let params = {}
    axios.get(uri,params,callback)
  },
  //add 招聘管理,面试题管理内容添加操作
  add:(uri)=>{
    let callback=(res)=>{
      console.log(res)
    }
    let params = {}
    axios.get(uri,params,callback)
  }
}
