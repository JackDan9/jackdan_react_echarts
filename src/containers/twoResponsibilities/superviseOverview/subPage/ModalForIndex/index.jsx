import React,{Component} from 'react'
import './index.scss'
import Rodal from '../../../../../components/Rodal/Rodal'
import echarts from 'echarts'
import resource from '../../../../../util/resource'

export default class ModalForIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            titleOne: '',
            titleTwo: '',
            visible: props.visible,
            areaName: props.areaName,
            type: props.type,
            xDataOne: [],
            xDataOne_2: [],
            dataOne: [],
            dataOne_2: [],
            xDataTwo: [],
            xDataTwo_2: [],
            dataTwo: [],
            dataTwo_2: [],
            xDataThree: [],
            dataThree: [],
            xYearList: [],
            dataYearList: []
        }
    }

    componentDidMount() {
        if(this.state.type === '1') {
            this.setState({title: '信访举报',titleOne: '来源分类', titleTwo: '性质分类'})
            this.requireTypeOne()
        }else if(this.state.type === '2') {
            this.setState({title: '违规违纪',titleOne: '党纪处分分类', titleTwo: '性质分类'})
            this.requireTypeTwo()
        }else if(this.state.type === '3') {
            this.setState({title: '立案查处',titleOne: '犯罪分类'})
            this.requireTypeThree()
        }
    }

    componentWillReceiveProps(props) {
        if(props.visible !== this.props.visible || props.areaName !== this.props.areaName || props.type !== this.props.type) {
            this.setState({
                visible: props.visible,
                areaName: props.areaName,
                type: props.type
            },() => {
                if(this.state.type === '1') {
                    this.setState({title: '信访举报',titleOne: '来源分类', titleTwo: '性质分类'})
                    this.requireTypeOne()
                }else if(this.state.type === '2') {
                    this.setState({title: '违规违纪',titleOne: '党纪处分分类', titleTwo: '性质分类'})
                    this.requireTypeTwo()
                }else if(this.state.type === '3') {
                    this.setState({title: '立案查处',titleOne: '犯罪分类'})
                    this.requireTypeThree()
                }
            })
        }

    }

    requireTypeOne = () => {
        resource.get(`/xaplan-cadre/api/officerLettersInfo/getLettersStatistics?areaName=${this.state.areaName}`).then((res) => {
            if(res.status !== 200) {
                console.log(res.message)
            }else {
                let xDataOne = [], xDataOne_2 = [], dataOne = [], dataOne_2 = [],xYearList = [], dataYearList = []
                for(let item of res.data.nature_by_year) {
                    xYearList.push(item.name)
                    dataYearList.push(item.count)
                }
                for(let item of res.data.letter_resource) {
                    if(item.year === 2017) {
                        xDataOne = ['来信', '来访', '上级转来', '电话', '网络及其他']
                        dataOne.push(item.visitCount, item.inLetterCount, item.hightLevelTransferCount, item.phoneCount, item.networkOtherCount)
                    }
                }
                for(let item of res.data.nature) {
                    xDataOne_2.push(item.name)
                    dataOne_2.push(item.count)
                }
                this.setState({
                    xYearList: xYearList,
                    dataYearList: dataYearList,
                    xDataOne: xDataOne,
                    dataOne: dataOne,
                    xDataOne_2: xDataOne_2,
                    dataOne_2: dataOne_2
                }, () => {
                    this.drawLine(this.state.xYearList, this.state.dataYearList)
                    this.drawBar(this.state.xDataOne, this.state.dataOne)
                    this.drawBarTwo(this.state.xDataOne_2, this.state.dataOne_2)
                })
            }
        })
    }

    requireTypeTwo = () => {
        resource.get(`/xaplan-cadre/api/officerIllegalInfo/getIllegalStatistics?areaName=${this.state.areaName}`).then((res) => {
            if(res.status !== 200) {
                console.log(res.message)
            }else {
                let xDataTwo = [], xDataTwo_2 = [], dataTwo = [], dataTwo_2 = [],xYearList = [], dataYearList = []
                for(let item of res.data.yearList) {
                    xYearList.push(item.name)
                    dataYearList.push(item.count)
                }
                for(let item of res.data.punishmentList) {
                    xDataTwo.push(item.name)
                    dataTwo.push(item.count)
                }
                for(let item of res.data.briefList) {
                    xDataTwo_2.push(item.name)
                    dataTwo_2.push(item.count)
                }
                this.setState({
                    xYearList: xYearList,
                    dataYearList: dataYearList,
                    xDataTwo: xDataTwo,
                    dataTwo: dataTwo,
                    xDataTwo_2: xDataTwo_2,
                    dataTwo_2: dataTwo_2
                }, () => {
                    this.drawLine(this.state.xYearList, this.state.dataYearList)
                    this.drawBar(this.state.xDataTwo, this.state.dataTwo)
                    this.drawBarTwo(this.state.xDataTwo_2, this.state.dataTwo_2)
                })
            }
        })
    }

    requireTypeThree = () => {
        resource.get(`/xaplan-cadre/api/officerCrimeInfo/getCrimeStatistics?areaName=${this.state.areaName}`).then((res) => {
            if(res.status !== 200) {
                console.log(res.message)
            }else {
                let xDataThree = [], dataThree = [], xYearList = [], dataYearList = []
                for(let item of res.data.yearList) {
                    xYearList.push(item.name)
                    dataYearList.push(item.count)
                }
                for(let item of res.data.crimeList) {
                    xDataThree.push(item.name)
                    dataThree.push(item.count)
                }
                this.setState({
                    xYearList: xYearList,
                    dataYearList: dataYearList,
                    xDataThree: xDataThree,
                    dataThree: dataThree
                }, () => {
                    this.drawLine(this.state.xYearList, this.state.dataYearList)
                    this.drawBar(this.state.xDataThree, this.state.dataThree)
                })
            }
        })
    }

    onClose = () => {
        this.setState({visible: false},() => {
            if(this.props.closeModal) {
                this.props.closeModal();
            }
        });
    }

    lineOption = (xData, data) => {
        const option = {
            // title: {
            //     text: '折线图堆叠'
            // },
            tooltip: {
                trigger: 'axis',
                formatter: "{b}年: {c}"
            },
            // legend: {
            //     data:['邮件营销']
            // },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#009cff'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  textStyle: {
                      color: '#969696'
                  }
                },
                splitLine: {
                  lineStyle: {
                      color: '#032752'
                  }
                },
                data: xData
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 16,
                    textStyle: {
                        color: '#969696'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#032752'
                    }
                },
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    data:data
                }
            ]
        };
        return option
    }

    barOneOption = (xData, data, rotate, bottom) => {
        const option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: "{b}: {c}"
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: bottom,
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : xData,
                    // axisTick: {
                    //     alignWithLabel: true
                    // },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        interval:0,
                        rotate:rotate,
                        margin: 30,
                        textStyle:{
                            color:'#969696',
                            align: 'center'
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#032752'
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#969696'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#032752'
                        }
                    },
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '30%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            color: '#0189e2'
                        }
                    },
                    data:data
                }
            ]
        };
        return option
    }

    drawLine = (xData, data) => {
        if(this.refs.line) {
            let lineCharts = echarts.init(this.refs.line)
            lineCharts.setOption(this.lineOption(xData, data))
            let content = document.getElementById('content-scroll-top')
            content.scrollTop = 0
        }
    }

    drawBar = (xData, data) => {
        if(this.refs.barOne) {
            let barCharts = echarts.init(this.refs.barOne)
            barCharts.setOption(this.barOneOption(xData, data, 0, '3%'))
            let content = document.getElementById('content-scroll-top')
            content.scrollTop = 0
        }
    }

    drawBarTwo = (xData, data) => {
        if(this.refs.barTwo) {
            let barChartsTwo = echarts.init(this.refs.barTwo)
            barChartsTwo.setOption(this.barOneOption(xData, data, -20, '20%'))
            let content = document.getElementById('content-scroll-top')
            content.scrollTop = 0
        }
    }

    render() {
        return (
            <div>
                <Rodal
                        isOpen={this.state.visible}
                        width={700}
                        height={500}
                        showCloseButton={false}
                        measure='px'
                        onClose={this.onClose}
                >
                    <div id='kt-modal-for-index'>
                        <header>{this.state.title}</header>
                        <div className='kt-content' id='content-scroll-top'>
                            <div className='kt-line-container'>
                                <div className='kt-line-charts' ref='line'></div>
                            </div>
                            <div className='kt-bar-container'>
                                <header>
                                    <span>{this.state.titleOne}</span>
                                    <span>
                                    <span></span>
                                </span>
                                </header>
                                <div className='kt-bar-charts' ref='barOne'></div>
                            </div>
                            {
                                this.state.type !== '3'?
                                    <div className='kt-bar-container'>
                                        <header>
                                            <span>{this.state.titleTwo}</span>
                                            <span>
                                                <span></span>
                                             </span>
                                        </header>
                                        <div className='kt-bar-charts' ref='barTwo' style={{height: '250px'}}></div>
                                    </div>:null
                            }
                        </div>
                    </div>
                </Rodal>
            </div>
        )
    }
}
