import React, { Component } from 'react';
import * as echarts from 'echarts';

import style from './style.scss';

class Radar extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
  }

  getOption() {
    let option = {
      title: {
        text: 'Basic Radar Chart',
        show: false
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
        show: false
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        },
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    };

    return option;
  }

  componentDidMount() {
    let chartDom = document.getElementById('radarMain');

    this.myChart = echarts.init(chartDom);

    this.myChart.setOption(this.getOption());

    window.addEventListener('resize', this.myChart.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.myChart.resize);
  }
  

  render() {
    return (
      <div className={style.radarContainer}>
        <div id="radarMain" style={{width: '100%', height: '100%'}}></div>
      </div>
    )
  }
}

export default Radar;