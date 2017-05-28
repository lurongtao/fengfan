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
    axios.post(uri, params)
    .then(function (response) {
      cb(response)
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  all: (param) => {
    axios({
      url: param.url,
      method: param.method,
      data: param.data
    })
    .then(function (res) {
      param.callback(res)
    })
  }
}

export default Axios
