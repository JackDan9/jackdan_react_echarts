import React, {Component} from "react";
import echarts from 'echarts';

export default class Dger extends Component {

  componentDidMount = () =>{
    let  myChart = echarts.init(document.getElementById('pie1'));
    myChart.setOption(this.setOption());
  };

  setOption = (parm) =>{
    let option = {
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x : 'center',
        bottom : 10,
        icon: 'circle',
        data:['信访举报','专项监察','专项巡视','上级交办'],
        textStyle: {
          color: '#fff'
        }
      },
      series : [
        {
          name:'半径模式',
          type:'pie',
          radius : ['30%', '70%'],
          roseType : 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data:[
            {
              value:55,
              name:'信访举报',
              itemStyle: {
                normal:{
                  color: '#f39801'
                }
              }
            }, {
              value:15,
              name:'专项监察',
              itemStyle: {
                normal:{
                  color: '#feeb00'
                }
              }
            }, {
              value:20,
              name:'专项巡视',
              itemStyle: {
                normal:{
                  color: '#90c320'
                }
              }
            }, {
              value:10,
              name:'上级交办',
              itemStyle: {
                normal:{
                  color: '#00a0e8'
                }
              }
            }
          ]
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div style={{width: '100%',height: '100%'}} id="pie1"></div>
    )
  }
}
