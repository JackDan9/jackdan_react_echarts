import React, { Component } from "react"
import { withRouter } from "react-router"

import styles from './index.scss'

class ThreeOutlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: [{value: '毕节', label: '毕节'}],
      option2: [
        {value:'', label:'类别'},
        {value:'市规划局', label:'市规划局'},
      ],
      selectValue: '',
    };
    this.params = {
      value:''
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
  handlePart = () => {
    if(this.state.selectValue === '市规划局') {
      this.props.history.push('/main/windsuji/index/supervision');
    }
  }
  changeSelect = (e) => {
    this.setState({
      selectValue: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.containerBox}>
          <div className={styles.topBox}>
            <span className={styles.search_icon} onClick={this.handleSearch}>
              <i className="iconfont">&#xe614;</i>
            </span>
            <input type="text" placeholder="搜索经费关键词/编码/身份证"
                   onKeyDown={this.handleKeyDown} onChange={this.handleText}/>
          </div>
          <div className={styles.botBox}>
          <span>
            <i className="iconfont">&#xe611;</i>
            <select name="" id="" placeholder="毕节" style={{width:"201px"}}>
              {
                this.state.option1.map((ite,index) => (
                  <option key={index} value={ite.value}>{ite.label}</option>
                ))
              }
            </select>
          </span>
            <span>
            <i className="iconfont">&#xe641;</i>
            <select name="" id="" placeholder="类别" onChange={this.changeSelect}>
              {
                this.state.option2.map((ite,index) => (
                  <option key={index} value={ite.value}>{ite.label}</option>
                ))
              }
            </select>
          </span>
            <span className={styles.searchBtn} onClick={this.handlePart}>查看部门费用</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ThreeOutlay)
