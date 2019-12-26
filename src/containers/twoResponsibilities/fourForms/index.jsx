import React, { Component } from "react"

import Bar from './subPage/Bar'
import Line from './subPage/Line'
import Dger from './subPage/Pie/dger'
import Half from './subPage/Pie/halfPie'
import Table from './subPage/Table'
import Double from './subPage/Pie/double'
import Map from './subPage/Map'
import Select from '../../WindSuJi/fourWindBus/subPage/Select'
import style from './style.scss';

const DataList = {
  all: {
    four: {
      total: 3226,
      data:[
        {
          name: '批评教育',
          value: 1532
        },
        {
          name: '组织处理',
          value: 895
        },
        {
          name: '严重违纪',
          value: 586
        },
        {
          name: '立案审查',
          value: 213
        }
      ]
    },
    people: {
      total: 6180,
        data:[
        {
          name: '干部',
          value: 2980
        },
        {
          name: '党员',
          value: 3200
        }
      ]
    }
  },
  bj: {
    four: {
      total: 1395,
      data:[
        {
          name: '批评教育',
          value: 580
        },
        {
          name: '组织处理',
          value: 378
        },
        {
          name: '严重违纪',
          value: 312
        },
        {
          name: '立案审查',
          value: 125
        }
      ]
    },
    people: {
      total: 3200 ,
      data:[
        {
          name: '干部',
          value: 1420
        },
        {
          name: '党员',
          value: 1780
        }
      ]
    }
  }
}
class FourForm extends Component {

  constructor(arg){
    super(...arg);
    this.state = {
      tab: '',
      data: DataList.all
    }
  }

  setTab = (e, type) =>{
    this.setState({
      tab: type === this.state.tab ? '' : type
    })
  };

  changeData = (name) =>{
    let d = name === '大方县' ?  DataList.bj : DataList.all;
    this.setState({
      data: d
    })
  }

  render() {
    const sty = {
      position: 'absolute',
      right: '10px',
      top: '10px',
      zIndex: 999,
      height: '28px',
      lineHeight: '28px'
    }
    return (
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.leftUp}>
            <div className={style.libs}>
              <div className={style.listBox}>
                <div className={style.cm + ' ' + style.one}>
                  <h5 onClick={(e)=>{this.setTab(e,'one')}}>四种形态<b>{this.state.data.four.total || 0}</b>条<img src={require('./images/ar.png')} alt=""/></h5>
                  <div className={style.lists} style={{display: this.state.tab === 'one' ? 'block':'none'}}>
                    {
                      this.state.data.four.data.map((item, index)=>{
                        return <p key={item.name + index}>
                          {item.name}
                          <b>{item.value}</b>条</p>
                      })
                    }
                  </div>
                </div>
                <div className={style.cm + ' ' + style.two}>
                  <h5 onClick={(e)=>{this.setTab(e,'two')}}>被监督总人数<b>{this.state.data.people.total || 0}</b>人<img src={require('./images/ar.png')} alt=""/></h5>
                  <div className={style.lists} style={{display: this.state.tab === 'two' ? 'block':'none'}}>
                    {
                      this.state.data.people.data.map((item, index)=>{
                        return <p key={item.name + index}>
                          {item.name}
                          <b>{item.value}</b>条</p>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={style.chartBox} style={{height: '100%'}}>
              <Map id="map" clickMap={this.changeData} />
            </div>
          </div>
          <div className={style.leftDown}>
            <div className={style.border}>
              <div className={style.title}>
                <h5>四种形态增长趋势</h5>
                <Select style={sty} list={['区县','市直部门']} />
              </div>
              <div className={style.chartBox}>
                <Line />
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightUp}>
            <div className={style.special}>
              <div className={style.half}>
                <div className={style.title}>
                  <h5>被问责线索信息来源</h5>
                </div>
                <div className={style.chartBox}>
                  <Dger />
                </div>
              </div>
              <div className={style.half}>
                <div className={style.title}>
                  <h5>问题信息占比</h5>
                </div>
                <div className={style.chartBox}>
                  <Double />
                </div>
              </div>
            </div>
          </div>
          <div className={style.rightMiddle}>
            <div className={style.border}>
              <div className={style.title}>
                <h5>被问责干部年龄与性别占比</h5>
                <span className={style.bd}>单位：人</span>
              </div>
              <div className={style.chartBox}>
                <Bar />
              </div>
            </div>
          </div>
          <div className={style.rightDown}>
            <div className={style.border + ' ' + style.special}>
              <div className={style.half}>
                <div className={style.title}>
                  <h5>岗位腐败占比</h5>
                </div>
                <div className={style.chartBox}>
                  <Half />
                </div>
              </div>
              <div className={style.half}>
                <div className={style.title}>
                  <h5>负面清单</h5>
                </div>
                <div className={style.chartBox}>
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FourForm
