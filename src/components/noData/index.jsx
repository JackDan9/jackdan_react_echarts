import React, {Component} from 'react';
import data from './images/mess.png';
import style from './style.scss';

export default class NoData extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.noData}>
                <img src={data} alt=""/>
                <p className={style.font}>暂无数据</p>
            </div>
        )
    }
}
