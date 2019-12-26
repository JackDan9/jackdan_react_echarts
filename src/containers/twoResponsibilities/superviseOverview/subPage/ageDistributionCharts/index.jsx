import React, { Component } from 'react'
import echarts from 'echarts'

import style from './index.scss'


function defaultOption () {
  return {
    series: [],
    tooltip: {
      trigger: 'item'
    }
  };
}

function getData(item, sum) {
  return [{
    value: item.value,
    name: item.name,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#1162B3'
        }, {
          offset: 1,
          color: '#133A6F'
        }])
      }
    }
  }, {
    value: sum - item.value,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    },
    tooltip: {
      formatter: '{b}'
    }
  }];
}

export default class AgeDistributionCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  componentDidMount() {
    this.drawAge(this.props.data)
  }
  componentWillReceiveProps(nextProps) {
    let data = this.state.data
    if(nextProps.data !== data) {
      this.drawAge(nextProps.data)
      this.setState({
        data: nextProps.data
      })
    }
  }
  ageOption = (data) => {

    let option = defaultOption();
    let initR = 60;
    let sum = 0;

    if(data) {
      sum = data.reduce((sum, value) => sum + value.value, 0);
    }

    for(let item of data) {
      option.series.push({
        name: item.name,
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [initR, initR + 6],
        data: getData(item, sum),
        center: ['35%', '65%'],
        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        }
      });
      initR = initR - 12;
    }
    return option;
  }

  drawAge = (data) => {
    if(this.refs.age) {
      echarts.dispose(this.refs.age)
      const age = echarts.init(this.refs.age)
      age.setOption(this.ageOption(data))
    }
  }
  render() {
    return (
      <div ref='age' className={style['age']}></div>
    )
  }
}
