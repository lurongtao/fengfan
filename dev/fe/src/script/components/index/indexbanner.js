import React,{Component} from 'react'

class IndexBanner extends Component{
  render(){
    return(
      <div className="banner">
        <div className="logo">
          <a className="banner_logo1"><img src="/images/bannerlogo1.png"/></a>
          <a className="banner_logo2"><img src="/images/bannerlogo2.png"/></a>
          <a className="banner_logo3"><img src="/images/bannerlogo3.png"/></a>
        </div>
        <div className="banner_word"><img src="/images/fengfan.png"/></div>
        <div className="banner_slogan">
          <span>千锋教学<i>持续</i>服务平台&nbsp;&nbsp;&nbsp;&nbsp;为您的成功保驾护航</span>
        </div>
        <div className="banner_line"></div>
      </div>
    )
  }
}
export default IndexBanner
