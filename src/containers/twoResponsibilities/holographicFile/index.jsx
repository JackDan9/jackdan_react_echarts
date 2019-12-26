import React, { Component } from 'react'

import Loadding from '../holographicFileDetail/subpage/loadding'
import styles from './style.scss'

class App extends Component {
  state = {
    value: ''
  }
  valueChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  submit = e => {
    e.preventDefault()

    this.props.history.push('/main/tworesponsibilities/holographicfile/list')
  }
  render() {
    return (
      <form className={styles.container} onSubmit={this.submit}>
        <h1>大数据助力党员干部精准画像</h1>
        <h2>一键查询干部全息档案</h2>
        <div className={styles.inputBox}>
          <input
            value={this.state.value}
            onChange={this.valueChange}
            placeholder="请输入姓名或者身份证号码"
            className={styles.input}
          />
          <button type="submit" />
        </div>
        <Loadding/>
      </form>
    )
  }
}

export default App
