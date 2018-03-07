import React, {Component} from 'react';
import echarts from 'echarts';

export default class Pip extends Component {

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
		window.addEventListener('resize', this.wageSumChart.resize);
	}
	componentWillUpdate(){
		this.drawWageSum(this.data);
	}

	drawWageSum = ( data )=>{
		this.wageSumChart = echarts.init(document.querySelector(`#${this.props.id}`));
		let option = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {d}%"
			},
			color:['#a4dafe','#f39801','#0183d9'],
			series : [
				{
					name: '三公经费',
					type: 'pie',
					radius : '60%',
					center: ['46%', '50%'],
					data:[
						{name:'因公出国（境）经费',value:27},
						{name:'公务车购置及运行费',value:40},
						{name:'公务招待费',value:33}],
					itemStyle: {
						normal: {
							label:{
								show: false,
								formatter: '{b}'
							}
						},
						labelLine :{show:false}
					}
				}
			]
		};
		this.wageSumChart.setOption( option );
	};

	render() {
		return (
			<div style={{width:'40%',height:'100%',verticalAlign:'top',display:'inline-block'}} id={this.props.id}></div>
		)
	}
}