import React, {Component} from "react";
import echarts from 'echarts';

const Data = [
  {
    name: '',
    data:[
      {
        name: '检查',
        value: 30.3
      },
      {
        name: '通报',
        value: 15.2
      },
      {
        name: '改组',
        value: 13.5
      },
      {
        name: '诫勉',
        value: 10
      },
      {
        name: '组织调查',
        value: 12.6
      },
      {
        name: '组织处理',
        value: 11
      },
      {
        name: '纪律处分',
        value: 7.4
      }
    ]
  },
  {
    name: '批评教育',
    data:[
      {
        name: '检查',
        value: 31.7
      },
      {
        name: '通报',
        value: 25.2
      },
      {
        name: '改组',
        value: 13.5
      },
      {
        name: '诫勉',
        value: 10
      },
      {
        name: '组织调查',
        value: 9.6
      },
      {
        name: '组织处理',
        value: 10
      },
      {
        name: '纪律处分',
        value: 0
      }
    ]
  },
  {
    name: '组织处理',
    data:[
      {
        name: '检查',
        value: 31.7
      },
      {
        name: '通报',
        value: 25.2
      },
      {
        name: '改组',
        value: 13.5
      },
      {
        name: '诫勉',
        value: 10
      },
      {
        name: '组织调查',
        value: 9.6
      },
      {
        name: '组织处理',
        value: 10
      },
      {
        name: '纪律处分',
        value: 0
      }
    ]
  },
  {
    name: '严重违纪',
    data:[
      {
        name: '检查',
        value: 21.7
      },
      {
        name: '通报',
        value: 25.2
      },
      {
        name: '改组',
        value: 13.5
      },
      {
        name: '诫勉',
        value: 10
      },
      {
        name: '组织调查',
        value: 9.6
      },
      {
        name: '组织处理',
        value: 10
      },
      {
        name: '纪律处分',
        value: 10
      }
    ]
  },
  {
    name: '立案审查',
    data:[
      {
        name: '检查',
        value: 21.7
      },
      {
        name: '通报',
        value: 20.2
      },
      {
        name: '改组',
        value: 13.5
      },
      {
        name: '诫勉',
        value: 10
      },
      {
        name: '组织调查',
        value: 9.6
      },
      {
        name: '组织处理',
        value: 10
      },
      {
        name: '纪律处分',
        value: 15
      }
    ]
  }
]
export default class Double extends Component {

  constructor(props){
    super(props);
    this.checked = '';
    this.canClickArea = ['批评教育','组织处理','严重违纪','立案审查'];
    this.myChart = null;
  }

  componentDidMount = () =>{
    if(this.myChart ){
      this.draw('');
    }else{
      let me = this;
      this.myChart = echarts.init(document.getElementById('double'));
      this.myChart.setOption(this.setOption(this.getData(name)));
      this.myChart.on('click', function (e) {
        if(me.canClickArea.indexOf(e.name) !== -1){
          me.checked = e.data.selected ? '':e.name;
          me.draw(me.checked);
        }
      })
    }
  };

  draw = (name) =>{
    this.myChart.setOption(this.setOption(this.getData(name)));
  };

  getData = (name) =>{
    if(!name){
     return  Data[0].data;
    }
    for(let i = 0; i < Data.length; i++){
      if(Data[i].name === name){
        return  Data[i].data;
      }
    }
  };

  setOption = (data) =>{
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}:({d}%)"
      },
      series: [{
        name: '',
        type: 'pie',
        radius: ['25%', '45%'],
        color: ['#d4733c', '#82ab29', '#a4dafe', '#007ee3'],
        label: {
          normal: {
            show: false,
            position: 'inner',
            fontSize: 12
          }
        },
        data: [{
          value: 30.3,
          name: '批评教育',
          selected: this.checked === '批评教育' ? true: false
        }, {
          value: 29.4,
          name: '组织处理',
          selected: this.checked === '组织处理' ? true: false
        }, {
          value: 26.5,
          name: '严重违纪',
          selected: this.checked === '严重违纪' ? true: false
        }, {
          value: 13.8,
          name: '立案审查',
          selected: this.checked === '立案审查' ? true: false
        } ]
      }, {
        name: this.checked || '全部',
        type: 'pie',
        radius: ['60%', '75%'],
        color: ['#f39801', '#90c320', '#f4c16e', '#4eb9ff', '#788cff','#788cff','#fc6814'],
        label: {
          normal: {
            formatter: '{b}\n{d}%'
          }
        },
        data: data
      }]
    };
    return option;
  };

  render() {
    return (
      <div style={{width: '100%',height: '100%'}} id="double"></div>
    )
  }
}
