import React, {Component} from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <ul>
          <li><img src="/build/images/qianfeng-logo.png" alt="千锋logo"/></li>
          <li><a href="http://www.mobiletrain.org/about/?" target="_blank">关于千锋</a></li>
          <li><a href="http://www.mobiletrain.org/about/contact.html?" target="_blank">联系我们</a></li>
          <li><a href="http://www.mobiletrain.org/cooperation/?" target="_blank">企业合作</a></li>
          <li><a href="http://www.mobiletrain.org/about/job.html?" target="_blank">招贤纳士</a></li>
          <li><a href="http://www8.53kf.com/webCompany.php?style=3&arg=10132404" target="_blank">报名咨询</a></li>
          <li><a href="http://www.mobiletrain.org/video/?" target="_blank">教学视频</a></li>
          <li><a href="http://www.mobiletrain.org/lecture/?" target="_blank">学习资料</a></li>
          <li><a href="http://bbs.mobiletrain.org/forum.php?" target="_blank">技术论坛</a></li>
          <li><a href="http://list.qq.com/cgi-bin/qf_invite?id=b8dbe50f0720fbac13c01a3164cddf60ec63557f6d474ee9&">RSS订阅</a></li>
        </ul>
        <p>Copyright 2011-2017 北京千锋互联科技有限公司 京ICP备12003911号-3 京公网安备11010802011455号</p>
      </div>
    )
  }
}

export default Footer
