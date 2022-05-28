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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // 获取画布
    const mainCanvas = document.getElementById("mainCanvas");
    const ctx = mainCanvas.getContext("2d");

    const gridSize = 20;

    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    
    console.log("mainCanvas: ", mainCanvas);
    console.log("ctx: ", ctx);
  }

  render() {
    return (
      <div className={style.Box}>
        {/* <div className={style.Nav}>
          <LeftNav leftNav={leftNavsFirst} />
        </div> */}
        <div className={style.container} style={{inset: '109px 40px 35px 225px', background: 'transparent'}}>
          {/* {this.props.children} */}
          <canvas style={{ position: 'fixed', width: 1167, height: 332, background: 'rgb(229, 229, 229)'}} id="mainCanvas" width={2334} height={664}></canvas>
        </div>
      </div>
    )
  }
}
