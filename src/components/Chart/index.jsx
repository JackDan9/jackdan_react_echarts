/**
 * @Description 
 * @Author JackDan
 * @Date 2022-05-30
 */
import React, { Component } from "react";
import Line from "./Line";
import Map from "./Map";
import style from "./style.scss";

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={style.chartContainer}>
        <div className={style.leftContainer}>
          <div className={style.content}>
            <Line />
          </div>
        </div>
        <div className={style.centerContainer}>
          <Map />
        </div>
        <div className={style.rightContainer}></div>
      </div>
    )
  }
}

export default Chart;