import React, { Component } from "react"
import style from './map.scss'
import echarts from 'echarts'
import bijie from 'static/maps/bijie.json'

export default class Map extends Component {

  componentDidMount() {
    this.initEchart();
    window.addEventListener('resize', this.initEchart);
  }

  componentWillUnmount() {
    if(this.echarts)
    {
      this.myChart.dispose();
    }
    window.removeEventListener('resize', this.initEchart);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.region !== this.props.region)
    {
      this.initEchart();
    }
  }

  initEchart = () => {
    if(!this.myChart)
    {
      this.myChart = echarts.init(this.refs.echart);
    }
    echarts.registerMap('bijie', bijie);
    let option = {
        tooltip: {},
        geo: {
            regions: [{
              name: this.props.region,
              itemStyle: {
                  normal: {
                      areaColor: '#a3dafe',
                  },
                  emphasis: {
                      areaColor: '#a3dafe',
                  }
              }
            }],
            map: 'bijie',
            roam: false,
            selectedMode: false,
            label: {
              normal: {
                color: '#fff',
                show: true
              },
              emphasis: {
                color: '#fff',
              }
            },
            itemStyle: {
                normal:{
                    show: false,
                    borderColor: '#bfceec',
                    areaColor: '#366194',
                    borderWidth: 2,
                },
                emphasis:{
                    show: false,
                    areaColor: '#a3dafe'
                }
            }
        }
    };

    this.myChart.setOption(option);
    this.myChart.on('click', (type) => {
      let name = type.name;
      if(this.props.onChange)
      {
        this.props.onChange(name);
      }
    });
  }

  render() {
    return (
      <div className={style.container} ref='echart'>

      </div>
    )
  }
}
