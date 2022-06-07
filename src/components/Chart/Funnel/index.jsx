import React, { Component } from 'react';
import * as echarts from 'echarts';

import style from './style.scss';

class Funnel extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
  }

  getOption() {
    let option = {
      title: {
        text: 'Funnel'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
      },
      series: [
        {
          name: 'Funnel',
          type: 'funnel',
          left: '10%',
          top: 60,
          bottom: 60,
          width: '80%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside'
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' }
          ]
        }
      ]
    };

    return option;
  }

  componentDidMount() {
    let chartDom = document.getElementById("funnelMain");
    this.myChart = echarts.init(chartDom);

    this.myChart.setOption(this.getOption());

    window.addEventListener('resize', this.myChart.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.myChart.resize);
  }

  render() {
    return (
      <div className={style.funnelContainer}>
        <div id="funnelMain" style={{width: '100%', height: '100%'}}></div>
      </div>
    )
  }
}

export default Funnel;