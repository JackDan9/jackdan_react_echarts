// 上帝保佑,永无bug

import React, {Component} from "react"

import style from './style.scss'

export default class Title extends Component {

    render() {
        return (
            <h3 className={style.wrap}>{this.props.value}</h3>
        )
    }
}
