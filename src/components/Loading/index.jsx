import React, {Component} from 'react';
import style from '../noData/style.scss';
import data from './IMAGES/35.gif'

export default class Loading extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<section className={style.noData}>
				<img src={data} alt=""/>
				<p className={style.font}>加载中</p>
			</section>
		)
	}
}