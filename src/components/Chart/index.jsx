/**
 * @Description 
 * @Author JackDan
 * @Date 2022-05-30
 */
import React, { Component } from "react";
import Bar from "./Bar";
import Funnel from "./Funnel";
import Line from "./Line";
import Map from "./Map";
import Pie from "./Pie";
import Radar from "./Radar";
import Scatter from "./Scatter";
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
            <Line 
              title={lineTitle}  />

            <Bar />

            <Pie />
          </div>
        </div>
        <div className={style.centerContainer}>
          <Map />
        </div>
        <div className={style.rightContainer}>
          <div className={style.content}>
            <Radar />

            <Scatter />
            
            <Funnel />
          </div>
        </div>
      </div>
    )
  }
}

export default Chart;