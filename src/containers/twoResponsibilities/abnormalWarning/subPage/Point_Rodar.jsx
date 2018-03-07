import React, { Component } from "react";
import Echart from 'echarts';

export default class Point extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.draw();
  }

  draw = ()=>{
    let myChart = Echart.init(document.getElementById('rodar'));
    let option = {
      radar: {
        shape: 'circle',
        center: ['50%', '50%'],
        radius: '65%',
        indicator: [{
          name: '指标一',
          max: 100,
          min: 1
        }, {
          name: '指标二',
          max: 100,
          min: 1
        }, {
          name: '指标三',
          max: 100,
          min: 1
        }, {
          name: '指标四',
          max: 100,
          min: 1
        }, {
          name: '指标五',
          max: 100,
          min: 1
        }, ],
        name: {
          formatter: function(d, e) {
            e.nameTextStyle = {
              color: '#ffffff',
              fontSize: 14
            };
            return d;
          }
        },
        splitArea: {
          show: false,

        }
      },
      series: [{
        name: '',
        type: 'radar',
        //areaStyle: {normal: {}},
        // data: _d.data
        data: [{
          value: [15,20,35,50,30],
          name: '企业详情',
          areaStyle: {
            normal: {
              opacity: 1,
              color: '#38cad7'
            }
          },

        }, ],
        lineStyle: {
          normal: {
            color: '#38cad7'
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#ffffff',
            borderWidth: 3
          }
        },
      }]
    };

    myChart.setOption(option);
  };

  render() {
    return (
      <div id="rodar" style={{width:'100%',height:'100%'}}></div>
    )
  }
}
