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
  }
}

export default Axios
