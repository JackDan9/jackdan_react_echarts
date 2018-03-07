import React, { Component } from 'react'
import echarts from 'echarts'
import style from './index.scss'

export default class GenderCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.dataObj
    }
  }
  componentDidMount() {
    this.drawGender(this.props.dataObj)
  }
  componentWillReceiveProps(nextProps) {
    let data = this.state.data
    if(nextProps.dataObj !== data) {
      this.drawGender(nextProps.dataObj)
      this.setState({
        data: nextProps.dataObj
      })
    }
  }
  genderOption = (dataObj) => {
    const option = {
      // backgroundColor: '#0E2A43',
      title: {
        text: '性别比例',
        left: '10',
        textStyle: {
          color: '#0D6CD0',
          fontSize: 15
        },
        padding: [10, 15]
      },
      grid: {
        top: '30',
        left: '10%',
        right: '10%',
        bottom: '-20',
        containLabel: true
      },

      tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: params => {
          return params[1].name + '：' + params[0].value + '人';
        }
      },
      xAxis:  {
        type: 'value',
        show: false,
        axisTick : {show: false},
        axisLine: {
          show: false,
          lineStyle:{
            color:'#fff',
          }
        },
        splitLine: {
          show: false
        },
      },
      yAxis: [
        {
          type: 'category',
          show: true,
          axisTick : {show: false},
          axisLine: {
            show: false,
            lineStyle:{
              color:'#fff',
            }
          },
          axisLabel: {
            textStyle: {
              color: '#6faafe',
              fontWeight: 'bold'
            }
          },
          data: dataObj.percent
        },
        {
          type: 'category',
          axisLine: {show:false},
          axisTick: {show:false},
          axisLabel: {show:false},
          splitArea: {show:false},
          splitLine: {show:false},
          data: ['女','男']
        },

      ],
      series: [
        {
          name: '有效房源量',
          type: 'bar',
          yAxisIndex:1,

          itemStyle:{
            normal: {
              show: true,
              color: '#585858',
              barBorderRadius:12,
              borderWidth:0,
              borderColor:'#333',
            }
          },
          barGap:'0%',
          barCategoryGap:'50%',
          data: dataObj.total,
          label: {
            normal: {
              show: true,
              formatter: function(data) {
                return data.name;
              },
              position: 'right',
              textStyle: {
                color: '#585858'
              }
            }
          },
          barMaxWidth: 12
        },
        {
          name: '钥匙量',
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                  offset: 0,
                  color: '#1182E8'
                }, {
                  offset: 1,
                  color: '#152852'
                }]
              ),
              barBorderRadius: 12
            }
          },
          barWidth: 12,
          barGap:'0%',
          barCategoryGap:'50%',
          data: dataObj.data
        }

      ]
    };
    return option
  }
  drawGender = (dataObj) => {
    if(this.refs.gender) {
      echarts.dispose(this.refs.gender)
      const genderCharts = echarts.init(this.refs.gender)
      genderCharts.setOption(this.genderOption(dataObj))
    }
  }
  render() {
    return (
      <div ref='gender' className={style['gender']}></div>
    )
  }
}
