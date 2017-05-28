import React, {Component} from 'react'

import { Tabs, Pagination } from 'antd';

import Axios from '../../utils/axios.util'

const TabPane = Tabs.TabPane;

import ListContent from './ListContent'

class List extends Component {
  constructor(props){
    super(props)
    this.state={
      curTag:"所有分类",
      step:0,
      count:10,
      curPage:1,
      listAllData:null
    }
  }

  //获取数据的封装
    getList(param,cb){
      Axios.get('/api/video/list', {
        condition: param.condition,
        start: param.start,
        count: param.count
      }, (res)=>{
        cb(res)
      })
    }

  //通过点击title,tag来改变其样式同时进行对数据的筛选
    changeTag(tag,index){
      this.setState({
        curTag:tag,
        curPage:1
      })
      //需重新设置状态值，否则下面函数访问不到set后的状态值
      this.state.curTag = tag
      this.getList({
        condition:tag,
        start:0,
        count:this.state.count
      },()=>{
        this.dataProcessing()
      })
    }
    changeTag2(step,index){
      this.setState({
        step:index
      })
      this.state.step = index
      this.dataProcessing()
    }

  //通过传入伪造数据来渲染title,tag
    titleData(tagData,curTag,changeTag){
      let tagList = tagData.map((item,index)=>{
        return (
          <li><i id={index} className={curTag==item.tag?"active":""||curTag==index?"active":""} onClick={changeTag.bind(this,item.tag,index)}>{item.tag}</i></li>
        )
      })
      return tagList
    }

  //页码改变重新渲染数据
    pageChange(page,pageSize){
      let that = this
      this.setState({
        curPage:page
      })
      // console.log(page)
      this.getList({
        start:page*this.state.count,
        count:this.state.count
      },(res)=>{
        that.setState({
          listAllData:res.data.data,
          listData:res.data.data.subjects
        })
      })
    }

  //数据进行分类和阶段处理
    dataProcessing(){
      // console.log(this.state.curTag)
      let htmlData = []
      if(this.state.listAllData){
        this.state.listAllData.subjects.map((value,index)=>{
          //分类：勾选所有分类时
          if(this.state.curTag=="所有分类"){
            //阶段：勾选所有阶段时
            if(this.state.step==0){
              htmlData.push(value)
            }
            //阶段：勾选其它阶段时
            else if(value.category.step==this.state.step){
              htmlData.push(value)
            }
          }
          //分类：勾选其它分类时
          else if(value.category.tag == this.state.curTag){
            //阶段：勾选所有阶段时
            if(this.state.step==0){
              htmlData.push(value)
            }
            //阶段：勾选其它阶段时
            else if(value.category.step == this.state.step){
              htmlData.push(value)
            }
          }
          return
        })
      }
      this.setState({
        listData:htmlData
      })
      // console.log(htmlData)
    }

  //封装冒泡排序
    rankData(data,key){
      for(let i = 0; i < data.length;i++){
        for(let j = i; j < data.length;j++){
          if(key==2){
            if(data[i].category.hot<data[j].category.hot){
              let ls = data[i]
              data[i] = data[j]
              data[j] = ls
            }
          }else{
            if(data[i].category.new<data[j].category.new){
              let ls = data[i]
              data[i] = data[j]
              data[j] = ls
            }
          }
        }
      }
    }

  //数据进行热度和新度排序处理
    dataProcessingAgain(key){
      let newListData = []
      let listData = this.state.listData
      if(key==2){
        this.rankData(listData,key)
      }else{
        this.rankData(listData)
      }
      this.setState({
        listData:listData
      })

    }

  //Tab切换时的回调
    callback(key){
      this.dataProcessingAgain(key)
    }

  render() {
    // console.log(this.state.curTag+":"+this.state.step)
    let tagData = [{id:0,tag:"所有分类"},{id:1,tag:"PHP"},{id:2,tag:"HTML5"},{id:3,tag:"VUE"},{id:4,tag:"JS"}]
    let tagData2 = [{id:0,tag:"所有阶段"},{id:1,tag:"第一阶段"},{id:2,tag:"第二阶段"},{id:3,tag:"第三阶段"}]
    return (
      <div className="m-video-list">
        <div className="nav">
          <div className="cat">
            <h1 className="title">分类</h1>
            <ul className="content">
              {this.titleData(tagData,this.state.curTag,this.changeTag)}
            </ul>
          </div>
          <ul className="level">
            <li className="title">阶段</li>
            {this.titleData(tagData2,this.state.step,this.changeTag2)}
          </ul>
        </div>
        <div className="list">
          <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
            <TabPane tab="最新" key="1">
              <ListContent dataSource={this.state.listData}></ListContent>
            </TabPane>
            <TabPane tab="最热" key="2">
              <ListContent dataSource={this.state.listData}></ListContent>
            </TabPane>
          </Tabs>
        </div>
        <Pagination total={this.state.listAllData?this.state.listAllData.total:1} current={this.state.curPage}  onChange={this.pageChange.bind(this)}/>
      </div>
    )
  }

  componentDidMount() {
    this.getList({
      condition:this.props.tag,
      start:0,
      count:10
    },(res)=>{
      // console.log(res)
      this.setState({
        listAllData:res.data.data,
        listData:res.data.data.subjects
      })
      this.dataProcessingAgain()
    })
  }
}

export default List
