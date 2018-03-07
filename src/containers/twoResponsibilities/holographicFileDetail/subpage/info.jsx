import React, { Component } from 'react'
import style from './info.scss'
import wenhao from '../image/wenhao.png'

export default class Info extends Component{
  constructor(){
    super();
    this.state = {
      show:false
    };
  }
  handleHover = (status) => {
    let state = { ...this.state };
    state.show = status;
    this.setState(state);
  }
  render(){
    return(
      <div className={style.box}>
        <img src={wenhao} alt=""
             onMouseEnter={() => this.handleHover(true)}
             onMouseLeave={() => this.handleHover(false)}
        />
        <div
          className={style.info}
          style = {{
                     display:this.state.show ? 'block' : 'none',
                      width:this.props.width ? this.props.width : ''
                  }}
        >{this.props.data}</div>
      </div>
    )
  }
}
