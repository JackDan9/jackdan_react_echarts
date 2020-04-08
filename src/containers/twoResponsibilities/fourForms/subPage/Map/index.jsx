import React, {Component} from "react"
import echarts from 'echarts'

export default class Map extends React.Component {

  constructor(props) {
    super(props)
    this.myChart = null;
    this.state = {
      df: false
    }
  }

  componentDidMount() {
    let geoJson = require('../../../../../static/maps/522400.json');
    this.myChart = echarts.init(document.getElementById(this.props.id));
    echarts.registerMap('毕节市', geoJson);
    this.myChart.setOption(this.getOption())
    this.myChart.on('click', this.clickMap);

    window.addEventListener('resize', this.myChart.resize)
  }

  componentWillReceiveProps(props) {

  }

  componentWillUnmount() {
    // this.myChart.dispose()
    window.removeEventListener('resize', this.myChart.resize);
    this.myChart.off('click', this.clickMap);
  }

  clickMap = (parmas) => {
    this.setState({
      df:parmas.name === '大方县' ? true:false
    },()=>{
      this.myChart.setOption(this.getOption())
    })
    this.props.clickMap(parmas.name);
  }

  click = () =>{
    this.setState({
      df: false
    },()=>{
      this.myChart.setOption(this.getOption())
    })
    this.props.clickMap('');
  }

  getOption = (data,min) => {
    let option = {
     visualMap: {
        show: false,
        min: 0,
        max: 100,
        right: 40,
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        inRange: {
          color: ['#a4dafe','#1f589b']
        },
        textStyle: {
          color: '#fff'
        },
        calculable: true
      },
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      series: [{
        type: 'map',
        mapType: '毕节市',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 2,
            borderColor: '#fff'
          },
          emphasis: {
            areaColor: '#a4dafe'
          }
        },
        animation: false,
        data:[
          {name: '赫章县', value: 100},
          {name: '威宁彝族回族苗族自治县',value: 100},
          {name: '纳雍县', value: 100},
          {name: '织金县', value: 100},
          {name: '黔西县', value: 100},
          {name: '大方县', value: this.state.df ? 0 : 100},
          {name: '金沙县', value: 100},
          {name: '七星关区', value: 100}
        ]
      }]
    }

    return option;
  }


  render() {
    return (
     <div style={{width: '100%',height: '100%',position: 'relative'}}>
       <span onClick={this.click} style={{display:this.state.df ? 'block':'none',position: 'absolute', right: '15px',top: '10px',cursor: 'pointer',zIndex: '555'}}>返回</span>
       <div id={this.props.id} style={{width: '100%',height: '100%',opacity: '0.9'}}></div>
     </div>
    )
  }
}
