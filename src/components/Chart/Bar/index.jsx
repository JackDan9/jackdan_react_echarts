import React, { Component } from 'react';
import * as echarts from 'echarts';

import style from './style';
import StandardDrawer from 'components/StandardDrawer';
import { Button, Card, Drawer } from 'antd';


class Bar extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
    this.state = {
      visible: false,
      activeTabKey: 'title'
    }
  }

  tabList = [
    {
      key: 'title',
      tab: '标题',
    },
    {
      key: 'legend',
      tab: '插图'
    },
    {
      key: 'grid',
      tab: '网格'
    },
    {
      key: 'xAxis',
      tab: 'x轴'
    }, 
    {
      key: 'yAxis',
      tab: 'y轴'
    },
    {
      key: 'tooltip',
      tab: '提示框'
    },
    {
      key: 'toolbox',
      tab: '工具栏'
    }
];

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

  handleChartParameter = (type) => {

  }

  /**
   * 
   * 抽屉自定义标题布局
   * 
   * @returns ReactNode
   */
  drawerTitleRender = () => {
    return (
      <div className={style.drawerTitle}>
        <div className={style.titleStyleBtn} onClick={this.handleChartParameter('style')}>样式</div>
        <div className={style.titleDataBtn} onClick={this.handleChartParameter('data')}>数据</div>
      </div>
    )
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
          className={style.drawerContainer}
          width="2rem"
          title={this.drawerTitleRender()}
          closeable={false}
          onClose={this.handleDrawerClose}
          visible={this.state.visible}
          drawerStyle={{
            background: 'rgba(0, 0, 0, 0.8)',
            padding: 0
          }}
          headerStyle={{
            color: 'rgba(255, 255, 255, 0)',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: 0,
            border: 'none'
          }}
          contentWrapperStyle={{
            padding: '0'
          }}>
          <div className={style.drawerBody}>
            <Card 
              style={{
                background: 'transparent',
                width: '100%',
                color: 'rgba(255, 255, 255, 1)',
                padding: 0,
                border: 'none'
              }}
              tabList={this.tabList}
              activeTabKey={this.state.activeTabKey}
              onTabChange={(tabKey) => {
                this.setState({
                  activeTabKey: tabKey
                })
              }}>
                aaa
            </Card>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Bar;