import React, { Component } from 'react';
import style from './style.scss'
// import LeftNav from '../../components/leftNav'
// import Map from 'components/Chart/Map'
// import Chart from 'components/Chart'
import Scene from '../../components/Scene';

// export default class twoRes extends Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  //   // 获取画布
  //   const mainCanvas = document.getElementById("mainCanvas");
  //   const ctx = mainCanvas.getContext("2d");

  //   const gridSize = 56;

  //   const canvasWidth = ctx.canvas.width;
  //   const canvasHeight = ctx.canvas.height;
  //   const halfCanvasWidth = canvasWidth / 2;
  //   const halfCanvasHeight = canvasHeight / 2;

  //   const xLineTotals = Math.floor(canvasHeight / gridSize); // 计算需要绘画的x轴条数

  //   for (let i = 0; i <= xLineTotals + 1; i++) {
  //     ctx.beginPath(); // 开启路径，设置不同的样式

  //     ctx.moveTo(0, gridSize * i + 0.5); // 起点位置
  //     ctx.lineTo(canvasWidth, gridSize * i + 0.5); // 终点位置
  //     ctx.strokeStyle = "#000"; // 每个线条的颜色
  //     ctx.stroke();

  //     ctx.closePath();
  //     ctx.restore();
  //   }

  //   for (let i = 0; i <= 2 * xLineTotals; i++) {
  //     ctx.beginPath();

  //     ctx.setLineDash([5, 5]);
      
  //     ctx.moveTo(0, gridSize / 2 * i);
  //     ctx.lineTo(canvasWidth, gridSize / 2 * i);
  //     ctx.strokeStyle = "rgba(209, 209, 209, 0.8)";
  //     ctx.stroke();

  //     ctx.closePath();
  //     ctx.restore();
  //   }

  //   const yLineTotals = Math.floor(canvasWidth / gridSize);

  //   console.log("xLineTotals: ", xLineTotals);
  //   console.log("canvasHeight: ", canvasHeight);
  //   console.log("canvasWidth: ", canvasWidth);
  //   console.log("yLineTotals: ", yLineTotals);

  //   for (let j = 0; j <= yLineTotals + 1; j++) {
  //     ctx.beginPath();

  //     ctx.setLineDash([0, 0]);
  //     ctx.moveTo(gridSize * j, 0);
  //     ctx.lineTo(gridSize * j, canvasHeight)
  //     ctx.strokeStyle = "#000";
  //     ctx.stroke();

  //     ctx.closePath();
  //     ctx.restore();
  //   }

  //   for (let j = 0; j <= 2 * yLineTotals; j++) {
  //     ctx.beginPath();

  //     ctx.setLineDash([5, 5]);

  //     ctx.moveTo(gridSize / 2 * j, 0);
  //     ctx.lineTo(gridSize / 2 * j, canvasHeight);
  //     ctx.strokeStyle = "rgba(209, 209, 209, 0.8)";
  //     ctx.stroke();

  //     ctx.closePath();

  //     ctx.restore();
  //   }
    
  //   console.log("mainCanvas: ", mainCanvas);
  //   console.log("ctx: ", ctx);
  // }
const twoRes = () => {

  // render() {
    return (
      <div className={style.Box}>
        {/* <Chart /> */}
        <Scene />
      </div>
    )
  // }
}

export default twoRes;
