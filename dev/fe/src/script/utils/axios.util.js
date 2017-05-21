import axios from 'axios'

const Axios = {
  get: (uri, params, cb)=>{
    axios.get(uri, {
      params: params
    })
    .then(function (response) {
      cb(response)
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  post: (uri, params, cb)=>{
    axios.get(uri, {
      params: params
    })
    .then(function (response) {
      cb(response)
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  lgypost: (param)=>{//lgy加入，用于登录
    axios({
      url: param.url,
      method: param.method,
      data: param.data,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    .then(function (res) {
      param.callback(res)
    })
  }
}

export default Axios
