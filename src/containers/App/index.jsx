import React, { Component } from "react"

import Header from "components/Header"
import style from "./style.scss"

export default class App extends Component {
  render() {
     const Height ={
      minHeight: window.innerHeight + 'px',
     }
    return (
      <div id={style["home-page"]} style={Height}>
        <div className={style.container}>
          <Header />
          <div className={style.Box}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
