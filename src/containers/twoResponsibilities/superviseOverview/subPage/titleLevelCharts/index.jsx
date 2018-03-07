import React, { Component } from 'react'
import echarts from 'echarts'
import style from './index.scss'

export default class TitleLevelCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }
  componentDidMount() {
    this.drawCharts(this.props.data)
  }
  componentWillReceiveProps(nextProps) {
    let data = this.state.data
    if(nextProps.data !== data) {
      this.drawCharts(nextProps.data)
      this.setState({
        data: nextProps.data
      })
    }
  }
  option = (data) => {
    const options = {
        series: [
          {
            type: 'pie',
            center: ['35%', '60%'],
            radius: [20, 50],
            roseType: 'area',
            data: data,
            itemStyle: {
              normal: {
                color: {
                  type: 'radial',
                  x: 0.65,
                  y: 0.75,
                  r: 1,
                  colorStops: [{
                    offset: 0, color: '#0E85CB' // 0% 处的颜色
                  },
                    {
                      offset: 0.5, color: 'rgba(14, 133, 203, 0.6)' // 0% 处的颜色
                    },
                    {
                      offset: 1, color: 'rgba(14, 133, 203, 0.2)' // 100% 处的颜色
                    }],
                  globalCoord: false // 缺省为 false
                }
                // color: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0, color: '#0E85CB' // 0% 处的颜色
                //     }, {
                //         offset: 1, color: 'rgba(14, 133, 203, 0.2)' // 100% 处的颜色
                //     }],
                //     globalCoord: false // 缺省为 false
                // }
              }
            },
            label: {
              normal: {
                formatter: '{c}',
                textStyle: {
                  color: '#6FAAFE'
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                smooth: 0.2,
                lineStyle: {
                  color: '#585858'
                }
              }
            }
          }
        ]
      };
      return options
  }
  drawCharts = (data) => {
    if(this.refs.charts) {
      echarts.dispose(this.refs.charts)
      const charts = echarts.init(this.refs.charts)
      charts.setOption(this.option(data))
    }
  }
  render() {
    return (
      <div ref='charts' className={style['charts']}></div>
    )
  }
}
