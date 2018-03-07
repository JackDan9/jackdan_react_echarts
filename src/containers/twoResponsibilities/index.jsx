import React, { Component } from 'react'
import style from './style.scss'
import LeftNav from '../../components/leftNav'

const leftNavsFirst = [
  {
    name: '监管概览',
    to: '/main/tworesponsibilities/index'
  },
  {
    name: '全息档案',
    to: '/main/tworesponsibilities/holographicfile'
  },
  {
    name: '异常预警',
    to: '/main/tworesponsibilities/abnormalwarning'
  },
  {
    name: '四种形态',
    to: '/main/tworesponsibilities/fourforms'
  }
]

export default class twoRes extends Component {
  render() {
    return (
      <div className={style.Box}>
        <div className={style.Nav}>
          <LeftNav leftNav={leftNavsFirst} />
        </div>
        <div className={style.container}>{this.props.children}</div>
      </div>
    )
  }
}
