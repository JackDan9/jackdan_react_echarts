import React, { Component } from "react";
import style from "./point.scss";
import PointDetail from './PointDetail';

export default class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      option: true,
      mask: false,
      manager: false
    };
    this.data = [
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 40},
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 40},
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 89},
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 40},
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 40},
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 68},
      {name: '张三', place: '毕节市民政局', job: '低保股股长', score: 40},
      {name: '张四', place: '毕节市民政局', job: '低保股股长', score: 67},
    ];
  }

  detailShow = item => e => {
    this.setState({
      mask: !this.state.mask,
      item: item
    })
  };

  render() {
    return (
      <div className={style.content}>
        <div className={"iconfont" + ' ' + style.div}>&#xe64a;</div>
        <div>
          {
            this.data.map((item,index) => {
              return (
                <div
                  key={index}
                  className={style.person}
                  onClick={this.detailShow(item)}
                >
                  <div className={"iconfont" + ' ' + style.headImg}>&#xe621;</div>
                  <p>{item.name}</p>
                  <p>{item.place}</p>
                  <p>{item.job}</p>
                  <div
                    className={style.score}
                    style={{ backgroundColor: item.score > 60 ? '#fe9900' : '#e4004f'}}
                  >
                    {item.score}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div
          className={style.mask}
          style={{display: this.state.mask ? 'block' : 'none'}}
          onClick={this.detailShow()}
        >
          {
            this.state.item && <PointDetail data={this.state.item} />
          }
        </div>
        <div className="iconfont">&#xe61c;</div>
      </div>
    )
  }
}
