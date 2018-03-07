import React, { Component } from 'react'
import styles from './style.scss'

const keys = ['姓名', '身份证号', '性别', '年龄', '地区', '工作单位', '职务']

const data = [
  ['马建国', '520500198402150017', '男', '33', '金沙县', '纪检监察局', '办公室主任'],
  ['李四', '520500197901150271', '男', '38', '毕节市', '县委办', '办公室主任'],
  ['赵铁', '520500196603151236', '男', '51', '大方县', '交管局', '副局长'],
  ['李刚', '520500198209157756', '男', '35', '织金县', '住建局', '副局长'],
  ['王迪', '520500197401151234', '男', '43', '金沙县', '扶贫办', '主任'],
  ['朱辉', '520500196912158311', '男', '48', '黔西县', '教育局', '学籍科科长'],
  ['郑明', '520500197809170233', '男', '39', '毕节市', '水利局', '局长'],
  ['李美芬', '520500197202270263', '女', '45', '纳雍县', '卫生局', '科员'],
  ['田小娟', '520500198205170248', '女', '35', '毕节市', '大坝镇', '党委副书记']
]

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

    // this.props.history.push('/')
  }
  render() {
    return (
      <div className={styles.box}>
        <form className={styles.container} onSubmit={this.submit}>
          <div className={styles.inputBox}>
            <input
              value={this.state.value}
              onChange={this.valueChange}
              placeholder="请输入姓名或者身份证号码"
              className={styles.input}
            />
            <button type="submit" />
          </div>
        </form>
        <div>
          <div className={styles.info}>
            <div>
              符合查询结果<span>96</span>人
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              筛选
              <button className={styles.filter} />
            </div>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '100px' }} />
                {keys.map((v, index) => <th key={v + index}>{v}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((r, index) => (
                <tr
                  key={index}
                  onClick={() =>
                    this.props.history.push('/main/tworesponsibilities/holographicfile/detail')
                  }
                >
                  <td>
                    <img src={require('./images/user.png')} />
                  </td>
                  {r.map(v => <td key={v}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.page}>
            <img src={require('./images/page.jpg')} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
