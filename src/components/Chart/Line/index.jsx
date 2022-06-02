import React, { Component } from 'react';
import echarts from 'echarts';

// propT


class Line extends Component {
  constructor(props) {
    super(props)
    this.myChart = null;
  }

  componentDidMount() {

  }

  

  render() {
    return (
      <div>
        <div id="mainCanvas" style={{width: '100%', height: '100%'}}></div>
      </div>
    )
  }
}

export default Line;
