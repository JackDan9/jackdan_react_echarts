import React, {Component} from "react";
import echarts from 'echarts';

export default class Bar extends Component {

  componentDidMount = () =>{
    let  myChart = echarts.init(document.getElementById('bar'));
    myChart.setOption(this.setOption());
  };

  setOption = (parm) =>{
    let myData = ['25-35','36-45', '46-55', '55-65', '65以上'];
    let option = {
      legend: {
        data: ['女', '男'],
        top: 10,
        center: true,
        textStyle: {
          color: '#fff',
          textAlign :'center'
        },
        itemGap:80,
        itemWidth: 0
      },
      grid: [{
        show: false,
        left: '4%',
        top: 10,
        bottom: 10,
        containLabel: true,
        width: '46%'
      }, {
        show: false,
        left: '50.5%',
        top: 10,
        bottom: 10,
        width: '0%'
      }, {
        show: false,
        right: '4%',
        top: 10,
        bottom: 10,
        containLabel: true,
        width: '46%'
      }, ],
      tooltip: {
        show: true,
        formatter: '{a}: {c}人',
        axisPointer: {
          type: 'shadow',
        }
      },
      xAxis: [{
        splitNumber:2,
        type: 'value',
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        position: 'top',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
            fontSize: 12
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#57617f',
            width: 1,
            type: 'solid'
          }
        }
      }, {
        gridIndex: 1,
        show: false,
      }, {
        gridIndex: 2,
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        position: 'top',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
            fontSize: 12,
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#57617f',
            width: 1,
            type: 'solid',
          },
        },
      }, ],
      yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
        },
        data: [],

      }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
        },
        data:myData.map(function(value) {
          return {
            value: value,
            textStyle:{
              align: 'center',
              color:'#fff',
              fontSize: 12,

            }
          }
        }),
      }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
        },
        data: [],
      }, ],
      series: [{
        name: '女',
        type: 'bar',
        label: {
          normal: {
            show: false,
            color: 'red',
            position: 'left',
            textStyle: {
              color: '#ffffff',
            }
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            color: '#007fde'
          },
          emphasis: {
            show: false,
          },
        },
        data: ['2120','1268','2298','335','65']
      }, {
        name: '男',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        label: {
          normal: {
            show: false,
            color: 'red',
            position: 'right',
            textStyle: {
              color: '#ffffff',
            }

          },
        },
        itemStyle: {
          normal: {
            color: '#e4004f'

          },
          emphasis: {
            show: false,
          },
        },
        data: ['2199','2350','2335','563','89'],
      }]
    };
    return option;
  };

  render() {
    return (
      <div style={{width: '100%',height: '100%'}} id="bar"></div>
    )
  }
}
