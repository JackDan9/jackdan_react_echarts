import React, { Component } from 'react'

import style from './relation.scss'
import touxiang from '../image/smallPeople.png'

export default class Relation extends Component{
  constructor(){
    super();
    this.initData = [
      {
        relation:'母亲',
        name:'刘芬芳',
        selected:false
      },
      {
        relation:'户主',
        name:'马建国',
        selected:true
      },
      {
        relation:'儿子',
        name:'马军良',
        selected:false
      },
      {
        relation:'配偶',
        name:'刘翠华',
        selected:false
      },
    ];
    this.state = {
      initData: this.initData
    };
  }
  handleClick = (index) => {
    let state = { ...this.state };
    state.initData.map((obj,index) => {
      obj.selected =false;
    })
    state.initData[index].selected = true;
    this.setState(state);
  }
  render(){
    let { initData } = { ...this.state };
    return(
      <div className={style.Box}>
        <div className={style.container}>
          {
            initData.map((obj,index) => {
              return(
                <dl key={index}
                    className={style[obj.selected ? ('active' + index) : ('first' +index)]}
                    onClick={() => this.handleClick(index)}
                >
                  <dd>{obj.relation}</dd>
                  <dt><img src={touxiang} alt=""/></dt>
                  <dd>{obj.name}</dd>
                </dl>
              )
            })
          }
          <div className={style.linear}></div>
          <div className={style.linear}></div>
          <div className={style.linear}></div>
        </div>
      </div>
    )
  }
}
