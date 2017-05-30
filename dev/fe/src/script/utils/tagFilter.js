

export default {
  //根据标签处理数据
    dataProcessing(data,curTag){
      let filterData = []
      // console.log(data)
      data.map((item,index)=>{
        // console.log(item)
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
