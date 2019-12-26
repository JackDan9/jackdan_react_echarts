import React, { Component } from 'react'

import LeftNav from '../../components/leftNav'
import style from './style.scss'

const leftNavsTwo = [
  {
    name: '三公经费',
    to: '/main/windsuji/index'
  },
  {
    name: '四风公车',
    to: '/main/windsuji/fourwindbus'
  }
]

export default class twoRes extends Component{
  render(){
    return (
      <div className={style.Box}>
        <div className={style.leftNav}>
          <LeftNav leftNav={leftNavsTwo}/>
        </div>
        <div className={style.container}>{this.props.children}</div>
      </div>
    )
  }
}
