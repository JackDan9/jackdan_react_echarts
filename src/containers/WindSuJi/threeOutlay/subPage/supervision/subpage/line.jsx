import React, {Component} from 'react';
import echarts from 'echarts';

export default class Line extends Component {

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
				text: '三公经费折线图',
				textStyle: {
					color:'#fff',
					fontSize:20,
					fontWeight: 'normal'
				}
			},
			tooltip: {
				trigger: 'axis',

			},
			color: ["#3697db", "#f2931b"],
			grid: {
				left: '3%',
				right: '7%',
				bottom: '10%',
				containLabel: true
			},
			xAxis: {
				name:'单位/月',
				type: 'category',
				nameGap: 1,
				boundaryGap: false,
				data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel:{
					color:'#fff'
				},
				axisLine: {
					lineStyle:{
						color:'#fff'
					}
				}
			},
			yAxis: [{
				type: 'value',
				axisLabel: {
					formatter: '{value} ',
					color:'#fff'
				},
				min: 6000.0,
				max: 0.0,
				axisTick: {
					alignWithLabel: true
				},
				nameTextStyle:{
					color:'#fff'
				},
				splitLine:{
					show:false
				},
				axisLine: {
					lineStyle:{
						color:'#fff'
					}
				}
			}],
			backgroundColor: '#072049',
			dataZoom: [
				{   show:true,
					height:15,
					xAxisIndex: [0],
					bottom:'12px',
					type: 'slider',
					start: 1,
					end: 35,
					handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
					handleSize:'90%',
					handleStyle: {
						color:'#071e47'
					},
					borderColor:'#0183d9',
					fillerColor:'#1252bc'
				},
				{
					show:true,
					type: 'inside',
					height:15,
					start: 1,
					end:35
				}
			],
			series: [{
				name: '实际',
				type: 'line',
				lineStyle: {
					normal: {
						width: 2,
					}
				},
				data: [4200,4700,5000,3700,3988,4333,4500,4820,4820,5077,4820,4431]
			}, {
				name: '预测',
				type: 'line',
				lineStyle: {
					normal: {
						width: 2,
						type:'dashed'
					}
				},
				data: [4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500]
			}]
		};
		this.wageSumChart.setOption( option );
	};

	render() {
		return (
			<div style={{width:'100%',height:'100%'}} id={this.props.id}></div>
		)
	}
}