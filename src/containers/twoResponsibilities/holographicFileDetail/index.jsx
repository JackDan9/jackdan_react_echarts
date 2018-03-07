import React, { Component } from "react"
import style from "./style.scss"
import smallPeople from "./image/smallPeople.png"
import bigPeople from "./image/bigPeople.png"
import Return from "./image/return.png"
import Relation from "./subpage/relation"
import caican from "./image/caican.gif"
import gongzuo from "./image/gongzuo.png"
import xueli from "./image/xueli.png"
import punish from "./image/punish.png"
import kaohe from "./image/kaohe.png"
import churujing from "./image/churujing.png"
import company from "./image/company.png"
import Info from "./subpage/info"

const NavData = [
  {
    value:'家庭成员',
    selected:true
  },
  {
    value:'工作履历',
    selected:false
  },
  {
    value:'学历/培训',
    selected:false
  },
  {
    value:'奖励惩处',
    selected:false
  },
  {
    value:'考核/审计',
    selected:false
  },
  {
    value:'财产情况',
    selected:false
  },
  {
    value:'经商办企业',
    selected:false
  },
  {
    value:'出入境',
    selected:false
  }];

export default class Hol extends Component {
  constructor(props){
    super(props);
    this.status = 0;
    this.initData = [
      {
        img:gongzuo,
        height:'17.8rem'
      },
      {
        img:xueli,
        height:'17.7rem'
      },
      {
        img:punish,
        height:'20.5rem'
      },
      {
        img:kaohe,
        height:'22.05rem'
      },
      {
        img:caican,
        height:'21.8rem'
      },
      {
        img:company,
        height:'17.5rem'
      },
      {
        img:churujing,
        height:'26rem'
      },
    ]
    this.state = {
      initState:NavData
    }
  }

  componentDidMount(){
  }

  handleState = (index) => {
    let state = { ...this.state };
    state.initState.map((obj,index) => {
      obj.selected = false;
    });
    this.status = index;
    state.initState[index].selected = !state.initState[index].selected;
    this.setState(state);
  }

  render() {
    let {initState} = this.state;
    let index = this.status -1;
    return (
      <div className={style.Box}>
        <div className={style.top}>
          <div className={style.header}>
            <img src={Return} alt="" onClick={() => { history.back()}}/>
          </div>
          <div className={style.topLeft}>
            <img src={bigPeople} alt=""/>
          </div>
          <div className={style.topRight}>
            <table>
              <tbody>
              <tr>
                <td><span>姓名：马建国</span> <span style={{float:'right'}}><Info data="公安局：马建国" width = '100px'/></span></td>
                <td><span>出生日期：1984年02月</span></td>
                <td><span>政治面貌：党员</span></td>
                <td><span>工作单位：纪检监察局</span></td>
              </tr>
              <tr>
                <td><span>年龄：33</span></td>
                <td><span>婚姻状况：已婚</span></td>
                <td><span>入党时间：2013年03月29日</span></td>
                <td><span>现任职务：办公室主任</span></td>
              </tr>
              <tr>
                <td><span>性别：男</span></td>
                <td><span>文化程度：本科</span></td>
                <td><span>联系电话：15523671120</span></td>
                <td><span>籍贯：金沙县</span></td>
              </tr>
              <tr>
                <td><span>民族：汉族</span></td>
                <td><span>身份证号码：520500198402150017</span><span style={{float:'right'}}><Info data="公安局：贵州省毕节市大方县西大街100号" width = '240px'/></span></td>
                <td><span>家庭住址：毕节市七星关区洪山路1号</span></td>
                <td><span>参加工作日期：2004年10月</span></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.bottom}>
          <ul>
            {
              initState.map((obj,index) => {
                return(
                  <li key = {index} className={style[obj.selected ? 'active' : '']} onClick={() => this.handleState(index)}>
                    {obj.value}
                  </li>
                )
              })
            }
          </ul>
          <div className={style.bottomContent}>
            {
              this.status === 0 ?
               <div className={style.allContent}>
                <div className={style.leftContent}>
                  <Relation/>
                </div>
                <div className={style.rightContent}>
                  <dl className={style.rightTopHeader}>
                    <dt><img src={smallPeople} alt=""/></dt>
                    <dd>
                      <p>
                        <span>姓名：</span><span>马建国</span>
                      </p>
                      <p>
                        <span>性别：</span><span>男</span>
                      </p>
                      <p>
                        <span>民族：</span><span>汉族</span>
                      </p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>关系</dt>
                    <dd>：户主</dd>
                  </dl>
                  <dl>
                    <dt>政治面貌</dt>
                    <dd>：党员</dd>
                  </dl>
                  <dl>
                    <dt>出生日期</dt>
                    <dd>：1984年02月</dd>
                  </dl>
                  <dl>
                    <dt>身份证号码</dt>
                    <dd>：520500198402150017</dd>
                  </dl>
                  <dl>
                    <dt>护照号码</dt>
                    <dd>：E123456</dd>
                  </dl>
                  <dl>
                    <dt>工作单位名称</dt>
                    <dd>：纪检监察局</dd>
                  </dl>
                  <dl>
                    <dt>现任职务</dt>
                    <dd>：办公室主任</dd>
                  </dl>
                  <dl>
                    <dt>职级</dt>
                    <dd>：乡科级副职</dd>
                  </dl>
                </div>
              </div> :
                <div className={style.forImage}>
                   <img src={this.initData[ index ].img} alt="" />
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
