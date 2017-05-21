//axios调取数据的公共方法

import axios from 'axios'

export default {
  get:(param)=>{
    axios({
      url:param.url,
      method:param.method,
      data:param.data
    })
    .then(function(res){
      param.callback(res)
    })
  }
}
