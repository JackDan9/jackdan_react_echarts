import React, { Component } from "react";
import moment from 'moment';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null
    }
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        time: moment(Date.now()).format('h: mm: ss a')
      })
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <span style={{fontSize: '24px'}}>
        {this.state.time}
      </span>
    )
  }
}
