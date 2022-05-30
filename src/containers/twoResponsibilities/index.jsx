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

    const gridSize = 56;

    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const halfCanvasWidth = canvasWidth / 2;
    const halfCanvasHeight = canvasHeight / 2;

    const xLineTotals = Math.floor(canvasHeight / gridSize); // 计算需要绘画的x轴条数

    for (let i = 0; i <= xLineTotals + 1; i++) {
      ctx.beginPath(); // 开启路径，设置不同的样式

      ctx.moveTo(0, gridSize * i + 0.5); // 起点位置
      ctx.lineTo(canvasWidth, gridSize * i + 0.5); // 终点位置
      ctx.strokeStyle = "#000"; // 每个线条的颜色
      ctx.stroke();

      ctx.closePath();
    }

    for (let i = 0; i <= 2 * xLineTotals; i++) {
      ctx.beginPath();

      ctx.setLineDash([5, 5]);
      
      ctx.moveTo(0, gridSize / 2 * i);
      ctx.lineTo(canvasWidth, gridSize / 2 * i);
      ctx.strokeStyle = "rgba(209, 209, 209, 0.8)";
      ctx.stroke();

      ctx.closePath();
    }

    const yLineTotals = Math.floor(canvasWidth / gridSize);

    console.log("xLineTotals: ", xLineTotals);
    console.log("canvasHeight: ", canvasHeight);
    console.log("canvasWidth: ", canvasWidth);
    console.log("yLineTotals: ", yLineTotals);

    for (let j = 0; j <= yLineTotals + 1; j++) {
      ctx.beginPath();

      ctx.moveTo(gridSize * j, 0);
      ctx.lineTo(gridSize * j, canvasHeight)
      ctx.strokeStyle = "#000";
      ctx.stroke();

      ctx.closePath();
    }

    for (let j = 0; j <= 2 * yLineTotals; j++) {
      ctx.beginPath();

      ctx.setLineDash([5, 5]);

      ctx.moveTo(gridSize / 2 * j, 0);
      ctx.lineTo(gridSize / 2 * j, canvasHeight);
      ctx.strokeStyle = "rgba(209, 209, 209, 0.8)";
      ctx.stroke();

      ctx.closePath();
    }
    
    console.log("mainCanvas: ", mainCanvas);
    console.log("ctx: ", ctx);
  }

  render() {
    return (
      <div className={style.Box}>
        {/* <div className={style.Nav}>
          <LeftNav leftNav={leftNavsFirst} />
        </div> */}
        <div className={style.container} style={{ inset: '109px 40px 35px 225px', background: 'rgb(229, 229, 229)' }}>
          {/* {this.props.children} */}
          <canvas className={style.mainCanvas} style={{ position: 'fixed', margin: 32, background: 'rgb(255, 255, 255)'}} id="mainCanvas" width={2334} height={900}></canvas>
        </div>
      </div>
    )
  }
}
