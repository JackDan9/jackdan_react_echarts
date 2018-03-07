import React, {Component} from 'react';
import echarts from 'echarts';

export default class Radar extends Component {

	constructor(props) {
		super(props);
		this.data = this.props.data;
		this.wageSumChart = null;
	}

	componentDidMount() {
		this.drawWageSum(this.data);
		window.addEventListener('resize', this.wageSumChart.resize);
	}
	componentWillReceiveProps(props) {
		this.data = props.data;
		this.drawWageSum(this.data);
		// window.addEventListener('resize', this.wageSumChart.resize);
	}
	componentWillUpdate(){
		this.drawWageSum(this.data);
	}

	drawWageSum = ( data )=>{
		this.wageSumChart = echarts.init(document.querySelector(`#${this.props.id}`));
		let option = {
			title: {
				top:'2%',
				text: '三公经费画像',
				textStyle: {
					color:'#fff',
					fontSize:20,
					fontWeight: 'normal'
				}
			},
			tooltip: {},
			radar: {
				radius: '50%',
				name:{
					fontSize:12
				},
				splitNumber: 5,
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				splitLine: {
					lineStyle: {
						color: '#fff',
					}
				},
				splitArea: {
					areaStyle: {
						color: 'rgba(7,27,64,1)',
						opacity: 1,
					}
				},
				indicator: [{
					name: '公务接待人数（单位数）',
					max: 100
				}, {
					name: '公务车行驶里程',
					max: 100,
					color:'#ed3f56'
				}, {
					name: '公务车维修次数',
					max: 100,
					color:'#ed3f56'
				}, {
					name: '加班餐费用',
					max: 100
				}, {
					name: '办公用品采购数额',
					max: 100,
					color:'#ed3f56'
				}, {
					name: '公务员外出时长',
					max: 100,
					color:'#ed3f56'
				}, {
					name: '会议培训次数',
					max: 100,
					color:'#ed3f56'
				}, {
					name: '其他支出',
					max: 100,
					color:'#ed3f56'
				}]
			},
			series: [{
				name: '三公经费',
				type: 'radar',
				symbolSize: 0,
				areaStyle: {
					normal: {
						shadowBlur: 13,
						shadowColor: 'rgba(0,0,0,.2)',
						shadowOffsetX: 0,
						shadowOffsetY: 10,
						opacity: 1
					}
				},
				data: [{
					value: [30, 58, 77, 41, 60, 88,91,76],
					name: '三公经费',
				}]
			}],
			color: ['#036ebc'],
		};
		this.wageSumChart.setOption( option );
	};

	render() {
		return (
			<div style={{width:'60%',height:'100%',verticalAlign:'top',display:'inline-block'}} id={this.props.id}></div>
		)
	}
}