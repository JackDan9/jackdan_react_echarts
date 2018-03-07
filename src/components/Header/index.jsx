import React, { Component } from 'react'
import { NavLink, Link , withRouter} from 'react-router-dom'
import style from './style.scss'
import logo from './image/logo.png'

const navs = [
  {
    name: '“两个责任”监管',
    to: '/main/tworesponsibilities'
  },
  {
    name: '正风肃纪监管',
    to: '/main/windsuji'
  }
]

const NavItem = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={style.navItem}
      activeClassName={style.navItemActive}
      key = {to}
    >
      {name}
    </NavLink>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
/* componentDidMount() {
    let twos = document.getElementById('overtwo');
    twos.addEventListener('mouseover', () => {
      this.setState({
        show: true
      })
    })
    twos.addEventListener('mouseout', () => {
      this.setState({
        show: false
      })
    })
  }*/

  render() {
    return (
      <div className={style.header}>
        <div className={style.leftLogo}>
          <img src={logo} alt=""/>
        </div>
        <div className={style.rightNav}>
          <div className={style.Nav}>
            {
              navs.map((obj,index) => {
                return NavItem(obj)
            })
            }
          </div>
          <div className={style.user}>
            Admin<span>|</span>个人中心
          </div>
        </div>
      </div>
    )
  }
}

export default Header
