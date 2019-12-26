import React, { Component } from "react";

import Roder from './Point_Rodar';
import style from "./PointDetail.scss";

export default class PointDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.data
    }
  }

  render() {
    return (
      <div
        className={style.detail}
        onClick={e => e.stopPropagation()}
      >
        <div className={style.detaiInfo}>
          <div className={style.detaiLeft}>
            <div className={"iconfont" + ' ' + style.headImg}>&#xe621;</div>
            <div>
              <p>{this.state.item.name}</p>
              <p>{this.state.item.place}</p>
              <p>{this.state.item.job}</p>
            </div>
          </div>
          <div
            className={style.detaiRight}
          >
            <span
              className={style.score}
              style={{backgroundColor: this.state.item.score > 60 ? '#fe9900' : '#e4004f'}}
            >{this.state.item.score}</span>
          </div>
        </div>
        <div
          className={style.roder}
        >
          <Roder/>
        </div>
      </div>
    )
  }
}
