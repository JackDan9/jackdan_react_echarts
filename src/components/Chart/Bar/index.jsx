import React, { Component } from 'react';
import * as echarts from 'echarts';

import style from './style';


class Bar extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
  }

  getOption = () => {
    let option = {
      title: {
        text: 'World Population',
        show: false
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        show: true,
      },
      legend: {
        show: false
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
          show: false
        }
      },
      xAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: '2021',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2022',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    };
    return option;
  }

  componentDidMount() {
    let chartDom = document.getElementById("barMain");
    this.myChart = echarts.init(chartDom);
    this.myChart.setOption(this.getOption());

    window.addEventListener("resize", this.myChart.resize);
  }



  componentWillUnMount() {
    window.removeEventListener('resize', this.myChart.resize);
  }



  render() {
    return (
      <div className={style.barContainer}>
        <div id="barMain" style={{width: '100%', height: '100%'}}></div>
      </div>
    )
  }
}

export default Bar;