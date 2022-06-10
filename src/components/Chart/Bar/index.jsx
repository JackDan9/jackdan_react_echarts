import React, { Component } from 'react';
import * as echarts from 'echarts';

import style from './style';
import StandardDrawer from 'components/StandardDrawer';
import { Button, Drawer } from 'antd';


class Bar extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
    this.state = {
      visible: false
    }
  }

  getOption = () => {
    let option = {
      title: {
        text: 'World Population',
        show: false
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        show: true,
      },
      legend: {
        show: false
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
          show: false
        }
      },
      xAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: '2021',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2022',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    };
    return option;
  }

  componentDidMount() {
    let chartDom = document.getElementById("barMain");
    this.myChart = echarts.init(chartDom);
    this.myChart.setOption(this.getOption());

    window.addEventListener("resize", this.myChart.resize);
  }



  componentWillUnMount() {
    window.removeEventListener('resize', this.myChart.resize);
  }

  handleBarClick = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleDrawerClose = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  drawerTitleRender = () => {
    return <div style={{
      display: "flex",
      height: '0.3rem',
      width: '100%'
    }}>
      <Button type="text" style={{

      }}>样式</Button>
      <Button type="text"></Button>
    </div>
  }

  render() {
    return (
      <div>
        <div className={style.barContainer}>
          <div 
            onClick={this.handleBarClick}
            id="barMain" 
            style={{width: '100%', height: '100%'}}></div>
        </div>
        <Drawer
          title={this.drawerTitleRender}
          closeable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.visible}
          drawerStyle={{
            background: 'rgba(0, 0, 0, 0.8)',
            
          }}
          headerStyle={{
            color: 'rgba(255, 255, 255,0)'

          }}>

        </Drawer>
      </div>
    )
  }
}

export default Bar;