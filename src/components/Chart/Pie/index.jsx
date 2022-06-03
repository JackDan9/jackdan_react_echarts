import React, { Component } from 'react';
import * as echarts from 'echarts';

import style from './style.scss';

class Pie extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
  }

  getOption = () => {
    let option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
        show: false,
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        show: false
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  
    return option;
  }

  componentDidMount() {
    let chartDom = document.getElementById("pieMain");
    this.myChart = echarts.init(chartDom);

    this.myChart.setOption(this.getOption());

    window.addEventListener('resize', this.myChart.resize);
  }

  compoentWillUnmount() {
    window.removeEventListener('resize', this.myChart.resize);
  }

  render() {
    return (
      <div className={style.pieContainer}>
        <div id="pieMain" style={{width: '100%', height: '100%'}}></div>
      </div>
    )
  }
}

export default Pie;