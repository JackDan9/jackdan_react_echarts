import React, { Component } from "react"
import GenderCharts from './subPage/genderCharts'
import PlaceCharts from './subPage/placeCharts'
import TitleLevelCharts from './subPage/titleLevelCharts'
import AgeDistributionCharts from './subPage/ageDistributionCharts'
import DegreeCharts from './subPage/degreeCharts'
// import ModalForIndex from './subPage/ModalForIndex'
import moment from 'moment'
import style from './index.scss'

export default class supervise extends Component {
  constructor() {
    super()
    this.state = {
      xian: '',
      ganbu: 3824,
      dangyuan: 52958,
      genderDataObj: {
        total: [100000, 100000],
        data: [48000, 52000],
        percent: ['48.00%','52.00%'],
      },
      placeDataObj: {
        total: [100000, 100000],
        data: [38000, 62000],
        percent: ['38.00%','62.00%'],
      },
      degreeData: [
        {name: '硕士及以上', value: 42},
        {name: '大学本科', value: 657},
        {name: '大学专科', value: 287},
        {name: '中专及以下', value: 319}
      ],
    degreeChartsData: { value:[42,657,287,319] },
    ageDistribution: [
      {name: '30以下', value: 135},
      {name: '31-40', value: 586},
      {name: '41-50', value: 1037},
      {name: '51以上', value: 794}
    ],
    titleLevelData: [
      {name: '县处级正职', value: 1},
      {name: '县处级副职', value: 0},
      {name: '乡科级正职', value: 419},
      {name: '乡科级副职', value: 566}
    ],
      modalData: {
        visible: false,      // 弹窗可见
        type: '1',           // 1: 信访举报 2:违纪违法 3:立案查处
        areaName: '毕节市',
        closeModal: this.closeModal.bind(this)
      },
      clock: `${moment().format('HH')} : ${moment().format('mm') } : ${moment().format('ss')} : ${moment().format('SSS')}`
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        clock: `${moment().format('HH')} : ${moment().format('mm') } : ${moment().format('ss')} : ${moment().format('SSS')}`
      });
    }, 1);
  }
  openChartsModal(type, visible) {
    this.setState({
      modalData: Object.assign(this.state.modalData, { visible: visible, type: type })
    });
  }
  closeModal() {
    this.setState({
      modalData: Object.assign(this.state.modalData, { visible: false })
    });
  }
  changeXianData = (name) => {
    let xian = this.state.xian
    if(xian !== name) {
      if(name === '七星关区') {
        this.setState({
          xian: name,
          ganbu: 523,
          dangyuan: 5330,
          genderDataObj: {
            total: [10000, 10000],
            data: [5800, 4200],
            percent: ['58.00%','42.00%'],
          },
          placeDataObj: {
            total: [10000, 10000],
            data: [2600, 7400],
            percent: ['26.00%','74.00%'],
          },
          degreeData: [
            {name: '硕士及以上', value: 142},
            {name: '大学本科', value: 357},
            {name: '大学专科', value: 687},
            {name: '中专及以下', value: 119}
          ],
          degreeChartsData: { value:[32,457,187,519] },
          ageDistribution: [
            {name: '30以下', value: 235},
            {name: '31-40', value: 386},
            {name: '41-50', value: 837},
            {name: '51以上', value: 1094}
          ],
          titleLevelData: [
            {name: '县处级正职', value: 10},
            {name: '县处级副职', value: 20},
            {name: '乡科级正职', value: 219},
            {name: '乡科级副职', value: 566}
          ],
        })
      }else if(name === '黔西县') {
        this.setState({
          xian: name,
          ganbu: 413,
          dangyuan: 4930,
          genderDataObj: {
            total: [10000, 10000],
            data: [4300, 5700],
            percent: ['43.00%','57.00%'],
          },
          placeDataObj: {
            total: [10000, 10000],
            data: [1200, 8800],
            percent: ['12.00%','88.00%'],
          },
          degreeData: [
            {name: '硕士及以上', value: 4},
            {name: '大学本科', value: 157},
            {name: '大学专科', value: 587},
            {name: '中专及以下', value: 219}
          ],
          degreeChartsData: { value:[22,757,487,519] },
          ageDistribution: [
            {name: '30以下', value: 335},
            {name: '31-40', value: 486},
            {name: '41-50', value: 637},
            {name: '51以上', value: 894}
          ],
          titleLevelData: [
            {name: '县处级正职', value: 3},
            {name: '县处级副职', value: 6},
            {name: '乡科级正职', value: 319},
            {name: '乡科级副职', value: 166}
          ],
        })
      }
    }else {
      this.setState({
        xian: '',
        ganbu: 3824,
        dangyuan: 52958,
        genderDataObj: {
          total: [100000, 100000],
          data: [48000, 52000],
          percent: ['48.00%','52.00%'],
        },
        placeDataObj: {
          total: [100000, 100000],
          data: [38000, 62000],
          percent: ['38.00%','62.00%'],
        },
        degreeData: [
          {name: '硕士及以上', value: 42},
          {name: '大学本科', value: 657},
          {name: '大学专科', value: 287},
          {name: '中专及以下', value: 319}
        ],
        degreeChartsData: { value:[42,657,287,319] },
        ageDistribution: [
          {name: '30以下', value: 135},
          {name: '31-40', value: 586},
          {name: '41-50', value: 1037},
          {name: '51以上', value: 794}
        ],
        titleLevelData: [
          {name: '县处级正职', value: 1},
          {name: '县处级副职', value: 0},
          {name: '乡科级正职', value: 419},
          {name: '乡科级副职', value: 566}
        ],
      })
    }
  }
  componentWillUnmount() {
    // 清除定时器
    if(this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    const proportionData = {
      letters: {
        rate: '',
        count: 348
      },
      illegal: {
        rate: '',
        count: 7
      },
      register: {
        rate: '',
        count: 2
      }
    };
    const { modalData } = this.state;
    return (
      <div>
        <div className={style['content']}>
          <div className={style['left']}>
            <div className={style['map']}>
              <div className={style['map-content']}>
                <div className={style['earth']}></div>
                <div className={style['earth-box']}></div>
                <div className={style['left-bottom-no-select']}></div>
                <div className={style['left-top-no-select']}></div>
                <div className={this.state.xian !== '七星关区' ? style['right-bottom-no-select'] : `${style['right-bottom-no-select']} ${style['active-qxg']}`} onClick={() => {this.changeXianData('七星关区')}}>
                  <a className={style['qixingguan']}>
                    <b>七星关区</b>
                  </a>
                </div>
                <div className={this.state.xian !== '黔西县' ? style['right-no-select'] : `${style['right-no-select']} ${style['active-qx']}`} onClick={() => {this.changeXianData('黔西县')}}>
                  <a className={style['qianxi']}>
                    <b>黔西县</b>
                  </a>
                </div>
                <a className={style['df']+" "+style['same-style-a']}>
                  <b>大方县</b>
                </a>
                <a className={style['ny']+" "+style['same-style-a']}>
                  <b>纳雍县</b>
                </a>
                <a className={style['js']+" "+style['same-style-a']}>
                  <b>金沙县</b>
                </a>
                <a className={style['zj']+" "+style['same-style-a']}>
                  <b>织金县</b>
                </a>
                <a className={style['hz']+" "+style['same-style-a']}>
                  <b>赫章县</b>
                </a>
                <a className={style['wn']+" "+style['same-style-a']}>
                  <b>威宁自治县</b>
                </a>
                <a className={style['jh']+" "+style['same-style-a']}>
                  <b>金海湖新区</b>
                </a>
                <a className={style['bl']+" "+style['same-style-a']}>
                  <b>百里杜鹃</b>
                </a>
                <div className={style['line-vertical']}></div>
                <div className={style['line-align']}></div>
                <div className={style['line-vertical-long']}></div>
                <div className={style['line-align-long']}></div>
                <div className={style['current-city-name']}>
                  <p>当前位置：</p>
                  {
                    this.state.xian !== ''?
                      <p>
                        <span>毕节市</span>
                        <span>-</span>
                        <span>{this.state.xian}</span>
                      </p>:
                      <p>
                        <span>毕节市</span>
                      </p>
                  }
                </div>
                <p className={style["time-clock"]}>{ this.state.clock }</p>
              </div>
            </div>
            <section className={style["records-box"]}>
              <div className={style["color-yellow"]} onClick={ this.openChartsModal.bind(this, '1', proportionData.letters.count !== 0)}>
                <strong className={style["record-num"]}>
                  { proportionData && proportionData.letters.count }
                </strong>
                信访举报
              </div>
              <div className={style["color-orange"]} onClick={ this.openChartsModal.bind(this, '2', proportionData.illegal.count !== 0 )}>
                <strong className={style["record-num"]}>
                  { proportionData && proportionData.illegal.count }
                </strong>
                违纪记录
              </div>
              <div className={style["color-blue"]} onClick={ this.openChartsModal.bind(this, '3', proportionData.register.count !== 0)}>
                <strong className={style["record-num"]}>
                  { proportionData && proportionData.register.count }
                </strong>
                立案查处
              </div>
            </section>
          </div>
          <div className={style['right']}>
            <div className={style['right-content-left']}>
              <div className={style['right-title']}>
                <div>
                  <p>{this.state.ganbu}</p>
                  <p>干部</p>
                </div>
                <div>
                  <p>{this.state.dangyuan}</p>
                  <p>党员</p>
                </div>
              </div>
              <div className={style['gender-charts']}>
                <GenderCharts dataObj={this.state.genderDataObj} />
              </div>
              <div className={style['place-charts']}>
                <PlaceCharts dataObj={this.state.placeDataObj} />
              </div>
            </div>
            <div className={style['right-content-right']}>
              <div className={style["right-box"]}>

                <div className={style["charts-part"]}>
                  {/* 职级分布 */}
                  <div className={style["titleTitle-box"]+" "+ style["panel-box"]}>
                    <h4>职级分布</h4>
                    <div className={style['charts-view']}>
                      <TitleLevelCharts data={this.state.titleLevelData} />
                    </div>
                    <div className={style["charts-list"]}>
                      <ul>
                        {
                          this.state.titleLevelData.map((listItem, index) => {
                            return <li key={ index }><label>{ listItem.name }</label><span>{ listItem.value }</span></li>;
                          })
                        }
                      </ul>
                    </div>
                  </div>
                  {/* 年龄分布 */}
                  <div className={style["age-box"]+" "+ style["panel-box"]}>
                    <h4>年龄分布</h4>
                    <div className={style['charts-view']}>
                      <AgeDistributionCharts data={this.state.ageDistribution} />
                    </div>
                    <div className={style["charts-list"]}>
                      <ul>
                        {
                          this.state.ageDistribution.map((listItem, index) => {
                            return <li key={ index }><label>{ listItem.name }</label><span>{ listItem.value }</span></li>;
                          })
                        }
                      </ul>
                    </div>
                  </div>
                  {/* 学历分布 */}
                  <div className={style["degree-box"]+" "+ style["panel-box"]}>
                    <h4>学历分布</h4>
                    <div className={style['charts-view']}>
                      <DegreeCharts data={this.state.degreeChartsData} />
                    </div>
                    <div className={style["charts-list"]}>
                      <ul>
                        {
                          this.state.degreeData.map((listItem, index) => {
                            return <li key={ index }><label>{ listItem.name }</label><span>{ listItem.value }</span></li>;
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*{*/}
          {/*(this.state.modalData && this.state.modalData.visible) && <ModalForIndex { ...modalData }></ModalForIndex>*/}
        {/*}*/}
      </div>
    )
  }
}
