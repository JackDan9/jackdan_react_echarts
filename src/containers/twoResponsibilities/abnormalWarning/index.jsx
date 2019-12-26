import React, { Component } from "react";

import Timer from './subPage/Timer';
import Point from './subPage/Point';
import Warn from './subPage/Warn';
import style from "./style.scss";

const options = ['房产','车辆','低保','优抚','经商办企业'
  ,'扶贫','私自出国','信访举报','四风','八项规定'];

const addImg = require('./Img/add.png');

const IndexOption = () => {
  return (
    <div>
      <h4>廉洁指数预警设置</h4>
      <div className={style.warning_score}>
        预警分数
        <div>
          红色预警<span></span>60分
        </div>
        <div>
          黄色预警<span></span>80分
        </div>
      </div>
      <div className={style.point}>
        <p>廉洁指标</p>
        <div className={style.input}>
          <div>
            指标一<input defaultValue={20} step={20} type="number" />
          </div>
          <div>
            指标二<input type="number" />
          </div>
          <div>
            指标三<input type="number" />
          </div>
          <div>
            指标四<input type="number" />
          </div>
        </div>
        <div>
          <img src={addImg} alt=""/>
        </div>
      </div>
    </div>
  )
};

const PointOption = () => {
  return (
    <div>
      <h4>廉政风险点预警设置</h4>
      <div className={style.PointOption}>
        {
          options.map((option, index) => {
            return (
              <div
                key={index}
                className={style.options}
              >
                {option}
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default class PreWarn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      option: true,
      mask: false,
      manager: false,
    };
  }

  active = () => {
    this.setState({
      option: !this.state.option,
      manager: false
    })
  };

  close = () => {
    this.setState({
      mask: false
    })
  };

  Manager = () => {

    this.setState({
      manager: true
    })
  };
  ManagerClose = () => {
    this.setState({
      manager: false
    })
  };

  render() {
    return (
      <div className={style.preBox}>
        <div className={style.top}>
          <div className={style.timer}>
            <span><Timer/></span>
            <span>当前预警总数456条</span>
          </div>
          <div className={style.mune}>
            <div onClick={this.Manager}><span className='iconfont'>&#xe726;</span>预警管理</div>
            <div><span className='iconfont'>&#xe602;</span>统计</div>
            <div><span className='iconfont'>&#xe624;</span>筛选</div>
          </div>
        </div>
        <div className={style.switch}>
          <div
            style={{ backgroundColor:this.state.option ? '#017acb' : '' }}
            onClick={this.active}
          >
            廉洁指数预警
          </div>
          <div
            style={{ backgroundColor:this.state.option ? '' : '#017acb' }}
            onClick={this.active}
          >
            廉政风险点预警
          </div>
        </div>
        {
          this.state.option
            ?
            <Point/>
            :
            <Warn/>
        }
        <div
          className={style.manager}
          style={{ display:this.state.manager ? 'block' : 'none' }}
        >
          {
            this.state.option
              ?
              <IndexOption/>
              :
              <PointOption/>
          }
          <div className={style.btns}>
            <button onClick={this.ManagerClose}>确定</button>
            <button>重置</button>
          </div>
        </div>
      </div>
    )
  }
}
