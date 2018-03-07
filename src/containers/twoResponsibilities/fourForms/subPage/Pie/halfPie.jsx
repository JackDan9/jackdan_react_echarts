import React, {Component} from "react";
import echarts from 'echarts';

export default class Half extends Component {

  componentDidMount = () =>{
    let  myChart = echarts.init(document.getElementById('pie2'));
    myChart.setOption(this.setOption());
  };

  setOption = (parm) =>{
    let dataStyle = {
      normal: {
        label: {show:false},
        labelLine: {show:false}
      }
    };
    let placeHolderStyle = {
      normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
      },
      emphasis : {
        color: 'rgba(0,0,0,0)'
      }
    };
    let option = {
      color: ['#1b95d4', '#89b929','#e4980e'],
      tooltip : {
        show: true,
        formatter: "{a} ({d}%)"
      },
      legend: {
        itemGap:12,
        bottom: 10,
        icon: 'circle',
        data:['厅局级干部','县处级干部','科级干部'],
        textStyle: {
          color: '#fff'
        }
      },
      series : [
        {
          name:'厅局级干部',
          type:'pie',
          clockWise:false,
          radius : [70,85],
          itemStyle : dataStyle,
          hoverAnimation: false,

          data:[
            {
              value:16,
              name:'01'
            },
            {
              value: 84,
              name:'invisible',
              itemStyle : placeHolderStyle
            }

          ]
        },
        {
          name:'县处级干部',
          type:'pie',
          clockWise:false,
          radius : [50, 65],
          itemStyle : dataStyle,
          hoverAnimation: false,
          data:[
            {
              value:45,
              name:'02'
            },
            {
              value:55,
              name:'invisible',
              itemStyle : placeHolderStyle
            }
          ]
        },
        {
          name:'科级干部',
          type:'pie',
          clockWise:false,
          hoverAnimation: false,
          radius : [30, 45],
          itemStyle : dataStyle,

          data:[
            {
              value:65,
              name:'03'
            },
            {
              value: 35,
              name:'invisible',
              itemStyle : placeHolderStyle
            }
          ]
        }

      ]
    };
    return option;
  };

  render() {
    return (
      <div style={{width: '100%',height: '100%'}} id="pie2"></div>
    )
  }
}
