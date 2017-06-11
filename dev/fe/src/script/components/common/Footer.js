import React, {Component} from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <ul>
          <li><img src="/build/images/qianfeng-logo.png" alt="千锋logo"/></li>
          <li>关于千锋</li>
          <li>联系我们</li>
          <li>企业合作</li>
          <li>招贤纳士</li>
          <li>报名咨询</li>
          <li>教学视频</li>
          <li>学习资料</li>
          <li>技术论坛</li>
          <li>RSS订阅</li>
        </ul>
        <p>Copyright 2011-2017 北京千锋互联科技有限公司 京ICP备12003911号-3 京公网安备11010802011455号</p>
      </div>
    )
  }
}

export default Footer
