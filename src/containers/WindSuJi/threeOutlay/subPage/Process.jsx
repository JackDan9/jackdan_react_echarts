import React, {Component} from "react"
import ProcessBar from '../images/process.png'
import styles from './Process.scss'
import Pagination from 'rc-pagination';

export default class Process extends Component {
  constructor(props) {
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
		  },
        {
          coding: 'BJ201711290117',
          county: '毕节市',
          depart: '市工商局',
          level: '二级',
          type: '公务接待',
          sum: 1477.2,
          name: '龙昊',
          ID: '52242519800425**20'
        },
        {
          coding: 'BJ201711300110',
          county: '毕节市',
          depart: '市食药监局',
          level: '二级',
          type: '公务接待',
          sum: 1891.34,
          name: '赵研',
          ID: '52242519900527**39'
        },
        {
          coding: 'BJ201711300111',
          county: '毕节市',
          depart: '市国土资源局',
          level: '一级',
          type: '公务接待',
          sum: 491.5,
          name: '郑庆徐',
          ID: '52242519771214**0X'
        },
        {
          coding: 'BJ201711300112',
          county: '毕节市',
          depart: '市交管局',
          level: '三级',
          type: '公务接待',
          sum: 3578.72,
          name: '李杰',
          ID: '52242519780227**44'
        },
      ],
      size: 7,
      page: 0,
      total: 420,
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


  render() {
    return (
      <div className={styles.processContainer}>
        <header>
          <span className={styles.numS}>
            共搜索到<span>100条</span>信息
          </span>
          <span className={styles.filterS}>
            <i className="iconfont">&#xe624;</i>筛选
          </span>
        </header>
        <div className={styles.tableBox}>
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
    )
  }
}
