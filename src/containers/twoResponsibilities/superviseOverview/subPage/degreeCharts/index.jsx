import React, { Component } from 'react'
import echarts from 'echarts'

import style from './index.scss'

function defaultOption () {
  return {
    radar: {
      indicator: [],
      center: ['30%', '60%'],
      radius: 40,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      name: {
        formatter: '{value}',
        textStyle: {
          color: '#6FAAFE'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(114, 172, 209, 0)',
            'rgba(114, 172, 209, 0)', 'rgba(114, 172, 209, 0)',
            'rgba(114, 172, 209, 0)', 'rgba(114, 172, 209, 1)'],
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: '#0A3E7B'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#0A3E7B'
        }
      },
      nameGap: 5
    },
    series: [{
      type: 'radar',
      itemStyle: {
        normal: {
          color: 'rgba(0, 0, 0, 0)',
          opacity: 0
        }
      },
      data: []
    }]
  };
}

export default class DegreeCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  componentDidMount() {
    this.drawDegree(this.props.data)
  }
  componentWillReceiveProps(nextProps) {
    let data = this.state.data
    if(nextProps.data !== data) {
      this.drawDegree(nextProps.data)
      this.setState({
        data: nextProps.data
      })
    }
  }
  degreeOption = (data) => {
    console.log('option',data)
    let option = defaultOption();
    for(let item of data.value) {
      option.radar.indicator.push({
        text: item
      });
    }
    option.series[0].data[0] = {
      value: data.value,
      areaStyle: {
        normal: {
          color: '#0D6CD0'
        }
      },
      lineStyle: {
        normal: {
          color: 'rgba(0, 255, 255, 0)'
        }
      }
    };

    return option;
  }
  drawDegree = (data) => {
    if(this.refs.degree) {
      echarts.dispose(this.refs.degree)
      const degree = echarts.init(this.refs.degree)
      degree.setOption(this.degreeOption(data))
    }
  }
  render() {
    return (
      <div ref='degree' className={style['degree']}></div>
    )
  }
}
