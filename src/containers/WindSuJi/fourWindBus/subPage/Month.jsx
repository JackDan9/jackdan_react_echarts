import React, { Component } from "react"
import style from './month.scss'
import {filterArr} from 'utils'

export default class Month extends Component {

  state = {
    month: this.props.month
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.month != this.state.month)
    {
      this.props.onChange(this.state.month);
    }

    if(this.props.month != prevProps.month)
    {
      this.setState({
        month: this.props.month
      });
    }
  }

  getPoints = () => {
    const list = [];
    for(let i = 1;i <= 12;i++)
    {
      list.push(
        <div key={i} className={style.pointerContainer}>
          <div
            className={style.point + ' ' + (this.state.month === i ? style.active : '')}
            onClick={this.onChange.bind(this,i)}
            style={i < this.state.month ? {background: '#dd2f4f'} : {}}
          >
            {
              i % 2 === 1 && (
                <span>{i + '月'}</span>
              )
            }
          </div>
        </div>
      );
    }
    return list;
  }

  onChange = (month) => {
    this.setState({
      month
    });
  }

  prev = () => {
    if(this.state.month > 1)
    {
      this.setState({
        month: this.state.month - 1
      });
    }
  }

  next = () => {
    if(this.state.month < 12)
    {
      this.setState({
        month: this.state.month + 1
      });
    }
  }

  render() {
    return (
      <div className={style.container}>
        <img src={require('../images/arrow-left.png')} onClick={this.prev}/>
        <div className={style.points}>
          <div className={style.line}></div>
          {
            this.getPoints()
          }
        </div>
        <img src={require('../images/arrow-right.png')} onClick={this.next}/>
      </div>
    )
  }
}
