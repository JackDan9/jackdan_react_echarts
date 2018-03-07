import React, { Component } from "react"
import style from './chart.scss'
import echarts from 'echarts'
import {filterArr} from 'utils'

export default class Chart extends Component {

  colorMap = {
    '形式主义': 'rgb(229, 0, 79)',
    '享乐主义': 'rgb(173, 31, 178)',
    '官僚主义': 'rgb(144, 195, 31)',
    '奢靡之风': 'rgb(243, 152, 0)',
  }

  componentDidMount() {
    this.initEchart();
    window.addEventListener('resize', this.initEchart);
  }

  componentDidUpdate(prevProps) {
    if(
      JSON.stringify(this.props.charts) !== JSON.stringify(prevProps.charts) ||
      JSON.stringify(this.props.disabled) !== JSON.stringify(prevProps.disabled)
    )
    {
      this.initEchart();
    }
  }

  componentWillUnmount() {
    if(this.echarts)
    {
      this.myChart.dispose();
    }
    window.removeEventListener('resize', this.initEchart);
  }

  initEchart = () => {
    if(!this.myChart)
    {
      this.myChart = echarts.init(this.refs.echart);
    }
    let option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 0,
            right: '6%',
            bottom: 0,
            top: 0,
            containLabel: true
        },
        xAxis : [
            {
                type : 'value',
                axisLine: {
                  show: false
                },
                axisLabel: {
                  color: '#a3dafe'
                },
                axisTick: {
                  show: false
                },
                position: 'top',
                splitLine: {
                  lineStyle: {
                    color: '#054278'
                  }
                }
            },
            {
                type : 'value',
                axisLine: {
                  lineStyle: {
                    color: '#0183d9'
                  }
                },
                position: 'bottom',
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : filterArr(this.props.charts, item => !this.props.disabled.includes(item.name)).map(item => item.name),
                axisTick: {
                    show: false
                },
                axisLabel: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: '#054278'
                  }
                },
            }
        ],
        series : [
            {
                name: '问题数量',
                type:'bar',
                data: filterArr(this.props.charts, item => !this.props.disabled.includes(item.name)).map((item, index) => {
                  return {
                    value : item.value,
                    itemStyle:{
                      normal: {
                        color: this.colorMap[item.name]
                      }
                    }
                  }
                }),
            },
        ]
    };

    this.myChart.setOption(option);
  }

  render() {
    return (
      <div className={style.container} ref='echart'>

      </div>
    )
  }
}
