import React, { Component } from 'react'
import caican from "../image/caican.gif"
import gongzuo from "../image/gongzuo.png"
import xueli from "../image/xueli.png"
import punish from "../image/punish.png"
import kaohe from "../image/kaohe.png"
import churujing from "../image/churujing.png"
import company from "../image/company.png"
export default class Loadding extends Component{
  initData = [
    {
      img:gongzuo,
      height:'17.8rem'
    },
    {
      img:xueli,
      height:'17.7rem'
    },
    {
      img:punish,
      height:'20.5rem'
    },
    {
      img:kaohe,
      height:'22.05rem'
    },
    {
      img:caican,
      height:'21.8rem'
    },
    {
      img:company,
      height:'17.5rem'
    },
    {
      img:churujing,
      height:'26rem'
    },
  ]
  render(){
    return(
      <div style={{display:'none'}}>
        {
          this.initData.map((obj,index) => {
            return (
              <img src={obj.img} alt="" key={index}/>
            )
        })
        }
      </div>
    )
  }
}
