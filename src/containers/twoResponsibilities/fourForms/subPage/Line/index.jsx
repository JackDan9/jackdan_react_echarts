import React, {Component} from "react";
import echarts from 'echarts';

export default class Line extends Component {

  componentDidMount = () =>{
    let  myChart = echarts.init(document.getElementById('line'));
    myChart.setOption(this.setOption());
  };

  setOption = (parm) =>{
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        icon: 'circle',
        itemGap: 13,
        data: ['批评教育', '组织处理', '严重违纪','立案审查'],
        left: 'center',
        textStyle: {
          fontSize: 12,
          color: '#F1F1F3'
        }
      },
      grid: {
        left: '3%',
        right: '6%',
        bottom: '12%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          rotate: -20,
          interval: 0,
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        data: ['七星关区','赫章县','威宁彝族回族苗族自治县','纳雍县','织金县','黔西县','大方县','金沙县']
      }],
      yAxis: [{
        type: 'value',
        name: '',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        name: '批评教育',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },

        itemStyle: {
          normal: {
            color: 'rgb(137,189,27)',
            borderColor: 'rgba(137,189,2,0.27)',
            borderWidth: 12

          }
        },
        data: [1800,2000, 2200, 2300, 2400,2700, 2550, 2450]
      }, {
        name: '组织处理',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12

          }
        },
        data: [2400,1000, 1800, 1200, 1400, 2100, 2000, 1800]
      },{
        name: '严重违纪',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12

          }
        },
        data: [1500, 500, 1000, 800, 1100, 700, 1200, 700]
      }, {
        name: '立案审查',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#e89312'
            }, {
              offset: 1,
              color: '#e89312'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {

            color: 'rgb(219,50,51)',
            borderColor: 'rgba(219,50,51,0.2)',
            borderWidth: 12
          }
        },
        data: [500,120, 130, 350, 200, 300, 220, 500]
      }, ]
    };
    return option;
  };

  render() {
    return (
      <div style={{width: '100%',height: '100%'}} id="line"></div>
    )
  }
}
