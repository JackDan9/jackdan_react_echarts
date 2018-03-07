import React, { Component } from "react"
import style from "./style.scss"
import Header from "components/Header"

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
