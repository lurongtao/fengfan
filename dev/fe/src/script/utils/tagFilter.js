

export default {
  //根据标签处理数据
    dataProcessing(data,curTag){
      let filterData = []
      data.map((item,index)=>{
        if(curTag=="所有标签"){
          filterData.push(item)
        }
        else if(item.tag == curTag){
          filterData.push(item)
        }
        return
      })
      return filterData
    }
}
