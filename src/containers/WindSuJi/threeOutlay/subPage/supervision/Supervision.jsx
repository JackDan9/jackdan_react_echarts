import React, { Component } from "react"
import styles from './Supervision.scss'
import ProcessBar from '../../images/process.png'
import Pagination from 'rc-pagination';
import Line from './subpage/line';
import Radar from './subpage/radar';
import Pip from './subpage/pip';

export default class Supervision extends Component {
  constructor(props){
    super(props)
	  this.state = {
		  index: -1,
		  tableSpan: [
			  '经费编码',
			  '所属区县(管委会/新区)',
			  '部门',
			  '三公费级别',
			  '类别',
			  '金额',
			  '使用人姓名',
			  '身份证号码',
			  ''
		  ],
		  tableList: [
			  {
				  coding: 'BJ201711290114',
				  county: '毕节市',
				  depart: '市规划局',
				  level: '一级',
				  type: '公务接待',
				  sum: 512.07,
				  name: '张三',
				  ID: '52242519710208**16'
			  },
			  {
				  coding: 'BJ201711290115',
				  county: '毕节市',
				  depart: '市教育局',
				  level: '一级',
				  type: '公务接待',
				  sum: 823.6,
				  name: '李四',
				  ID: '52242519820917**01'
			  },
			  {
				  coding: 'BJ201711290116',
				  county: '毕节市',
				  depart: '市水利局',
				  level: '一级',
				  type: '公务接待',
				  sum: 740,
				  name: '罗美丽',
				  ID: '52242519691128**47'
			  }
		  ],
		  size: 7,
		  page: 0,
		  total: 420,
	  }
    this.params = {
      value:''
    }
  }
	pageChange = page => {
		this.state.page = page - 1;
	}

	handleCheck = (index) => {
		if (this.state.index === index ) {
			this.setState({
				index: -1
			})
		} else {
			this.setState({
				index: index
			})
		}
	}

  handleSearch = (e) => {
    if(this.params.value === '公务接待'){
      this.props.history.push(`/main/windsuji/index/process`)
    }else {
      return;
    }
  }
  // 文本框输入
  handleText = (e) => {
    this.params.value = e.target.value;
  }

  handleKeyDown = (e) => {
    if(e.keyCode == '13' && this.params.value === '公务接待') {
      this.props.history.push(`/main/windsuji/index/process`)
    }
  }

  render() {
    return(
      <section id={styles['Supervision']}>
        <div className={styles.su_header}>
          <div className={styles.topBox}>
            <span className={styles.search_icon} onClick={this.handleSearch}>
              <i className="iconfont">&#xe614;</i>
            </span>
            <input type="text" placeholder="搜索经费关键词/编码/身份证" onKeyDown={this.handleKeyDown} onChange={this.handleText}/>
          </div>
        </div>
        <div className={styles.su_container}>
            <div className={styles.box1}>
				<Line id="lin1" />
            </div>
          <div className={styles.box2}>
			  <Radar id="ra1"/>
			  <Pip id="p1" />
          </div>
          <div className={styles.table}>
            <div className={styles.tableContainer}>
              <div className={styles.tableHeader}>
				  {
					  this.state.tableSpan.map((ite, index) => (
                          <span key={index}>{ite}</span>
					  ))
				  }
              </div>
              <div className={styles.tableBody}>
				  {
					  this.state.tableList.map((ite, index) => (
                          <div className={styles.listIte} key={index}>
                            <div>
                              <div className={styles.iconIte}><i className="iconfont">&#xe6fa;</i></div>
                              <div className={styles.list}>
                                <span>{ite.coding}</span>
                                <span>{ite.county}</span>
                                <span>{ite.depart}</span>
                                <span>{ite.level}</span>
                                <span>{ite.type}</span>
                                <span>{ite.sum}</span>
                                <span>{ite.name}</span>
                                <span>{ite.ID}</span>
                                <span>
                                  <button className={styles.checkBtn} onClick={() => {this.handleCheck(index)}}>
                                      {
                                          this.state.index === index ? '收起' : '查看详情'
                                      }
                                  </button>
                                </span>
								  <div style={{ display: this.state.index === index ? 'inline-block' : 'none' }} className={styles.detailShow}>
									  <p className={styles.useD}>资金用途：张三（身份证号52242519710208**16），于2017年11月29日，接待黔西南州兴义市调研，路费和餐费共512.07元</p>
									  <p className={styles.processT}>资金审批流程：</p>
									  <div className={styles.processI}>
										  <img src={ProcessBar} alt=""/>
									  </div>
								  </div>
                              </div>
                            </div>

                          </div>
					  ))
				  }
              </div>
          </div>
          <div className={styles.footerPagination}>
            <Pagination
                pageSize={this.state.size}
                current={this.state.page + 1}
                total={this.state.total}
                onChange={this.pageChange}
            >
            </Pagination>

          </div>
            </div>
        </div>

      </section>
    )
  }
}
