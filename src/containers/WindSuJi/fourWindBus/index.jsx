import React, { Component } from "react"
import 'rc-tabs/assets/index.css'
import style from './style.scss'
import Tabs, {TabPane} from 'rc-tabs'
import TabContent from 'rc-tabs/lib/SwipeableTabContent'
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar'
import Map from './subPage/Map'
import Chart from './subPage/Chart'
import {findOne, deepCopy} from 'utils'
import Table from './subPage/Table/index'
import Month from './subPage/Month'
import bijieData from './datas/bijieCharts.json'
import dafangData from './datas/dafangCharts.json'
import Datetime from 'react-datetime'
import Select from './subPage/Select'

export default class FourWindBus extends Component {

  state = {
    checkInfo: false,
    charts: bijieData,
    total: bijieData.total,
    region: '毕节地区',
    month: 1,
    disabled: [],
    flag: '',
    map: false,
    useTime: '',
    time: ''
  }

  callback = () => {

  }

  checkCharts = (name) => findOne(this.state.charts, (item) => {
    if(item.name === name && item.disabled)
    {
      return item;
    }
  });

  disabled = (name) => {
    const index = this.state.disabled.indexOf(name);
    const disabled = deepCopy(this.state.disabled);
    if(index !== -1)
    {
      disabled.splice(index, 1);
    }else{
      disabled.push(name);
    }
    this.setState({
      disabled
    });
  }

  dataSource = [
    {title: '蒋超良：发扬担当精神斗争精神奉献精神 坚决夺取反腐败斗争压倒性胜利', time: '2017年11月23日14:08', source: '湖北日报', url: 'http://cpc.people.com.cn/n1/2017/1123/c64102-29664123.html'},
    {title: '推动全面从严治党在新时代迈上新征程', time: '2017年12月04日08:23', source: '光明日报', url: 'http://theory.people.com.cn/n1/2017/1204/c40531-29683500.html'},
    {title: '“八项规定”出台五周年 全面从严治党的杠杆意义', time: '2017年12月04日07:56', source: '人民网-时政频道', url: 'http://politics.people.com.cn/n1/2017/1204/c1001-29683159.html'},
    {title: '八项规定 赢得党心民心（大数据观察）', time: '2017年12月04日04:28', source: '人民网－人民日报', url: 'http://politics.people.com.cn/n1/2017/1204/c1001-29682892.html'},
    {title: '居高声自远 非是藉秋风', time: '2017年12月03日04:54', source: '人民网－人民日报', url: 'http://world.people.com.cn/n1/2017/1203/c1002-29682132.html'},
    {title: '这件事儿，习近平强调这样抓', time: '2017年12月01日14:55', source: '新华网', url: 'http://politics.people.com.cn/n1/2017/1201/c1001-29680607.html'},
    {title: '切实加强党的纪律和纪律建设', time: '2017年12月01日13:51', source: '求是', url: 'http://dangjian.people.com.cn/n1/2017/1201/c117092-29680443.html'},
    {title: '认真学习贯彻党的十九大新要求新部署 扎扎实实做好机关党建工作', time: '2017年12月01日12:10', source: '人民网-理论频道', url: 'http://theory.people.com.cn/n1/2017/1201/c40531-29680325.html'},
  ]

  columns = [
    {key: 'title', label: '标题', filter: (item) => (
      <a href={item.url} target='blank' className={style.link}>{item.title}</a>
    )},
    {key: 'time', label: '发布时间'},
    {key: 'source', label: '来源', limit: 10}
  ]

  monthChange = (month) => {
    this.setState({
      month
    });
  }

  countNum = () => {
    const list = this.state.charts[this.state.month];
    let result = 0;
    list.forEach((item) => {
      if(!this.state.disabled.includes(item.name))
      {
        result += item.value
      }
    });
    return result;
  }

  onMapChange = (name) => {
    if(name === '大方县')
    {
      this.setState({
        charts: dafangData,
        region: name,
        total: dafangData.total,
        month: 1,
        checkInfo: false,
        flag: '',
        map: false
      });
    }else{
      this.setState({
        charts: bijieData,
        region: name,
        total: bijieData.total,
        month: 1,
        checkInfo: false,
        flag: '',
        map: false
      });
    }
  }

  search = () => {
    if(!this.state.time)
    {
      return;
    }else{
      this.timeChange(this.state.time);
    }
  }

  timeChange = (time) => {
    const date = new Date(time);
    const useTime = `${date.getFullYear()}-${(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))}-${date.getDate() > 9 ? date.getDate() : ('0' + date.getDate())}`;
    this.setState({
      map: true,
      time,
      useTime
    });
  }

  backTop = () => {
    this.setState({
      checkInfo: false,
      charts: bijieData,
      total: bijieData.total,
      region: '毕节地区',
      month: 1,
      disabled: [],
      flag: ''
    });
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.tab}>
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}
            renderTabBar={()=><ScrollableInkTabBar />}
            renderTabContent={()=><TabContent />}
          >
            <TabPane tab='“四风”问题监管天网' key="1">
              <div className={style.net}>
                <div className={style.top}>
                  <div className={style.map}>
                    <img src={require('./images/xingshi.png')} className={style.xingshi + ' ' + (this.state.flag === 1 ? style.active : '')} onClick={() => this.setState({flag: 1,checkInfo: true})}/>
                    <img src={require('./images/xiangle.png')} className={style.xiangle + ' ' + (this.state.flag === 2 ? style.active : '')} onClick={() => this.setState({flag: 2,checkInfo: true})}/>
                    <img src={require('./images/guanliao.png')} className={style.guanliao + ' ' + (this.state.flag === 3 ? style.active : '')} onClick={() => this.setState({flag: 3,checkInfo: true})}/>
                    <img src={require('./images/shemi.png')} className={style.shemi + ' ' + (this.state.flag === 4 ? style.active : '')} onClick={() => this.setState({flag: 4,checkInfo: true})}/>
                    {
                      (this.state.checkInfo || this.state.region !== '毕节地区') && (
                        <div className={style.backTop} onClick={this.backTop}>
                          <img src={require('./images/back.png')}/>
                        </div>
                      )
                    }
                    <Map onChange={this.onMapChange} region={this.state.region}/>
                  </div>
                  {
                    this.state.checkInfo ? (
                      <div className={style.info}>
                        <div className={style.infoHeader}>
                          “四风”问题信息
                        </div>
                        <div className={style.infoContent}>
                          <div className={style.row}>
                            <label>“四风”问题类型：</label>
                            <span>形式主义</span>
                          </div>
                          <div className={style.row}>
                            <label>“四风”问题发生地区：</label>
                            <span>大方县</span>
                          </div>
                          <div className={style.row}>
                            <label>“四风”问题具体情况：</label>
                            <span>大方县XXXX局原副科长XXX不正确履行工作职责、违反国家法律法规规定问题。2017年5月至6月，XXX在负责办理国家农业用油补贴审核工作中，不正确履行工作职责，对大方县两家公司提交的柴油补贴申请材料未认真核对，没有发现申报材料中存在的明显错误，在证件不符的情况下，仍作出审核通过意见，造成国家经济损失。</span>
                          </div>
                          <div className={style.row}>
                            <label>举报人：</label>
                            <span>李全福</span>
                          </div>
                          <div className={style.row}>
                            <label>举报人联系方式：</label>
                            <span>13XXXXXXXXX</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={style.chart}>
                        <div className={style.chartHeader}>
                          <h2>{this.state.region}</h2>
                          <Select style={{marginRight: '34px'}} list={[2017,2016,2015,2014,2013]} />
                          <span>年度“四风”问题</span>
                          <span className={style.number}>{this.state.total}</span>
                          <span>条</span>
                        </div>
                        <div className={style.chartContent}>
                          <div className={style.blocks}>
                            <div className={style.block} style={this.state.disabled.includes('形式主义') ? {background: '#DCDDDC'} : {background: '#e5004f'}} onClick={() => this.disabled('形式主义')}>形式主义</div>
                            <div className={style.block} style={this.state.disabled.includes('享乐主义') ? {background: '#DCDDDC'} : {background: '#ad1fb2'}} onClick={() => this.disabled('享乐主义')}>享乐主义</div>
                            <div className={style.block} style={this.state.disabled.includes('官僚主义') ? {background: '#DCDDDC'} : {background: '#90c31f'}} onClick={() => this.disabled('官僚主义')}>官僚主义</div>
                            <div className={style.block} style={this.state.disabled.includes('奢靡之风') ? {background: '#DCDDDC'} : {background: '#f39800'}} onClick={() => this.disabled('奢靡之风')}>奢靡之风</div>
                          </div>
                          <div className={style.total}>
                            <span>统计</span>
                            <span style={{margin: '0 20px', color: '#0183d9'}}>{this.countNum()}</span>
                            <span>条</span>
                          </div>
                          <div style={{height: '18.15vh'}}>
                            <Chart charts={this.state.charts[this.state.month]} disabled={this.state.disabled}/>
                            <Month onChange={this.monthChange} month={this.state.month}/>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            </TabPane>
            <TabPane tab='公车监管' key="2">
              <div className={style.bus}>
                <div className={style.net}>
                  <div className={style.top}>
                    <div className={style.map}>
                      {
                        this.state.map ? (
                          <img src={require('./images/map.png')} className={style.imgMap}/>
                        ) : (
                          <Map />
                        )
                      }
                    </div>
                    <div className={style.busUse}>
                      <h2>公车使用情况</h2>
                      <div className={style.busUseContent}>
                        <div className={style.input}>
                          <img className={style.search} onClick={this.search} src={require('./images/search.png')}/>
                          <input type="text" placeholder='请输入车牌号'/>
                        </div>
                        <div className={style.row} style={{marginBottom: '20px'}}>
                          <label>区／县</label>
                          <Select
                            className={style.select}
                            style={{marginRight: '3.7rem'}}
                            list={['七星关区','大方县','黔西县','金沙县','织金县','纳雍县','赫章县','威宁县','百里杜鹃管委会','金海湖新区管委会']}
                          />
                          <label>部门</label>
                          <Select
                            className={style.select}
                            list={['市政府','财政局','公安局','安监局','民政局','政法委','运输管理局','工商管理局']}
                          />
                        </div>
                        <div className={style.row}>
                          <label>车牌号</label>
                          <Select className={style.select} style={{marginRight: '3.7rem'}} list={['贵F00000','贵FAAAAA','贵FBBBBB','贵FCCCCC','贵FDDDDD']} />
                          <label>日期</label>
                          <Datetime locale="zh_CN"
                            closeOnSelect={true}
                            dateFormat='YYYY-MM-DD'
                            timeFormat={false}
                            value={this.state.time}
                            className={style.datatime}
                            onChange={this.timeChange}
                          />
                        </div>
                        {
                          this.state.map && (
                            <div className={style.form}>
                              <div className={style.row}>
                                <div>
                                  <label>车牌号：</label>
                                  <span>贵F00000</span>
                                </div>
                                <div>
                                  <label>车辆类型：</label>
                                  <span>小轿车</span>
                                </div>
                              </div>
                              <div className={style.row}>
                                <div>
                                  <label>车辆所属部门：</label>
                                  <span>市政府</span>
                                </div>
                                <div>
                                  <label>车辆使用时间：</label>
                                  <span>{this.state.useTime}</span>
                                </div>
                              </div>
                              <div className={style.singleRow}>
                                <label>车辆使用人员：</label>
                                <span>李全福</span>
                              </div>
                              <div className={style.singleRow}>
                                <label>车辆使用说明：</label>
                                <span>送XXX从毕节市政府大楼前往毕节东客站</span>
                              </div>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
          <div className={style.bottom}>
            <h2 style={{marginTop: '20px', marginBottom: '10px', color: '#0183d9'}}>正风肃纪舆情报道</h2>
            <div className={style.table}>
              <Table dataSource={this.dataSource} columns={this.columns}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
