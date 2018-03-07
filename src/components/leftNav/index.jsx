import React, { Component } from 'react'
import style from './style.scss'
import { NavLink, Link } from 'react-router-dom'

const LeftNavItem = ({ name, to }) => {
  return (
  <li  key = {to + name}>
    <NavLink
      to={to}
      className={style.navItem}
      activeClassName={style.navItemActive}
    >
      {name}
    </NavLink>
  </li>
  )
}
export default class navLeft extends Component {
  render(){
    return(
      <ul className={style.Box}>
        {
          this.props.leftNav.map((obj,index) => {
            return LeftNavItem(obj)
          })
        }
      </ul>
    )
  }
}
