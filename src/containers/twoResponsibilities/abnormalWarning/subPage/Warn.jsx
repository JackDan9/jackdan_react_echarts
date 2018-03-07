import React, {Component} from "react";
import style from "./warn.scss";
import DetailOut from './detailOut';

const headImg = require('../Img/headImg.png');

export default class Warn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cutType: true,
      subData: null,
      subTitle: null
    };
    this.data = {
      declare: {
        title: ['', '姓名', '身份证号', '地区', '工作单位', '职位', '廉政风险点', ''],
        detail: {
          company: [
            {title: '统一社会信用代码', content: '911306290670149685'},
            {title: '注册号', content: '520500000006335'},
            {title: '企业名称', content: '织金县鑫容汽车销售有限公司登记类别'},
            {title: '企业类型', content: '有限责任公司(自然人投资或控股)'},
            {title: '法定代表人／负责人姓名', content: '李刚'},
            {title: '法定代表人／负责人身份证号', content: '520500198209157756'},
            {title: '注册资本', content: '300.000000万元'},
            {title: '经营范围', content: '汽车（不含九座以下乘用车）销售；汽车配件、橡胶制品、润滑油、汽车装饰用品、日用百货的销售（法律、法规规定或国务院决定须经批准的项目，未获批准前不得经营）'}
          ],
          house: [
            {title: '产权人姓名', content: '张三'},
            {title: '产权人身份证号', content: '520500197701150037'},
            {title: '关系', content: '户主'},
            {title: '房产来源/去向', content: '购买'},
            {title: '具体地址', content: '毕节市七星关区洪山路3号'},
            {title: '建筑面积', content: '122.75'},
            {title: '房产性质', content: '商品房'},
            {title: '交易时间', content: '2012年10月'}
          ],
          cars: [
            {title: '车辆型号', content: '东风雪铁龙牌'},
            {title: '国产／进口', content: '国产'},
            {title: '车辆类型', content: '正常'},
            {title: '所有权', content: '王迪'},
            {title: '机动车状态', content: '违章未处理'},
            {title: '车牌号', content: '小型汽车贵F1411N'}
          ],
          aboard: [
            {title: '出入标识', content: '出境'},
            {title: '产权人目的地身份证号', content: '日本'},
            {title: '出入境时间', content: '2009.10.01'},
            {title: '出入境口岸', content: '上海浦东机场'},
            {title: '航班', content: 'CA5644'},
            {title: '事由', content: '旅游'},
            {title: '审批单位', content: '毕节市出入境管理局'},
            {title: '交易因公/因私时间', content: '因私'}
          ]
        },
        data: [
          {name: '张三', idCard: 520500197701150037, place: '毕节市', partment: '民政局', job: '低保股股长', point: '房产数量',},
          {name: '李四', idCard: 520500197901150271, place: '毕节市', partment: '民政局', job: '低保股股长', point: '车辆数据'},
          {name: '赵铁', idCard: 520500196603151236, place: '大方县', partment: '交管局', job: '副局长', point: '房产数量'},
          {name: '李刚', idCard: 520500198209157756, place: '织金县', partment: '住建局', job: '副局长', point: '经商办企业'},
          {name: '王迪', idCard: 520500197401151234, place: '金沙县', partment: '扶贫办', job: '主任', point: '车辆数量'},
          {name: '郑明', idCard: 520500197809170233, place: '毕节市', partment: '水利局', job: '局长', point: '房产数量'}
        ]
      },
      corrup: {
        title: ['', '姓名', '身份证号', '地区', '工作单位', '职位', '异常预警描述', ''],
        data: [
          {name: '张二三', idCard: 520500197701150037, place: '毕节市', partment: '大坝镇', job: '党委书记镇长', point: '低保预警'},
          {name: '李五四', idCard: 520500197901150271, place: '毕节市', partment: '朱昌镇', job: '民政所所长', point: '低保预警'},
          {name: '赵铁柱', idCard: 520500196603151236, place: '大方县', partment: '羊场镇', job: '组织委员', point: '贫困户预警'},
          {name: '李刚强', idCard: 520500198209157756, place: '织金县', partment: '住建局', job: '副局长', point: '危房改造补助预警'},
          {name: '王迪飞', idCard: 520500197401151234, place: '金沙县', partment: '扶贫办', job: '主任', point: '贫困户预警'},
          {name: '朱辉黄', idCard: 520500196912158311, place: '黔西县', partment: '教育局', job: '学籍科科长', point: '教育补助预警'},
          {name: '郑明理', idCard: 520500197809170233, place: '毕节市', partment: '水利局', job: '	局长', point: '	优抚补助预警'}
        ],
        detail: {
          prePoor: [
            {title: '姓名', content: '王乱子'},
            {title: '身份证号', content: '520503195410030412'},
            {title: '与户主关系', content: '父亲'},
            {title: '保障类型', content: '低保贫困户'},
            {title: '家庭住址', content: '金沙县桂花乡桂寨村'},
            {title: '享受待遇人数', content: '3'},
            {title: '发放金额', content: '3360'}
          ],
          basicLiving: [
            {title: '姓名', content: '张建国'},
            {title: '身份证号', content: '52050095409230713'},
            {title: '与户主关系', content: '父亲'},
            {title: '保障类型', content: '农村低保'},
            {title: '家庭住址', content: '毕节市大坝镇小湾村'},
            {title: '享受待遇人数', content: '5'},
            {title: '发放金额', content: '875'}
          ],
          house: [
            {title: '姓名', content: '李小峰'},
            {title: '身份证号', content: '52050095409230713'},
            {title: '与户主关系', content: '兄弟'},
            {title: '家庭地址', content: '金沙县平口镇二寨村'},
            {title: '年度', content: '2011'},
            {title: '危房等级', content: 'D级'},
            {title: '补贴金额', content: '6000'}
          ],
          education: [
            {title: '姓名', content: '朱婷婷'},
            {title: '身份证号', content: '520500200212093545'},
            {title: '与户主关系', content: '女儿'},
            {title: '家庭地址', content: '黔西县人民路78号'},
            {title: '年度', content: '2015'},
            {title: '补助类型', content: '国家助学金'},
            {title: '补贴金额', content: '补贴金额'}
          ],
          comfort: [
            {title: '姓名', content: '郑明理'},
            {title: '身份证号', content: '520500197809170233'},
            {title: '优抚类型', content: '因公8级'},
            {title: '补助金额', content: '10000'}
          ]
        }
      }
    }
  }

  active = cut => e => {
    if (cut !== 'sb') {
      this.setState({
        cutType: false
      });
    }
    else {
      this.setState({
        cutType: true
      });
    }
  };

  detailOut = (t, d) => e => {
    let subData = null;
    switch (t) {
      case '房产数量':
        subData = d.house;
        break;
      case '车辆数据':
        subData = d.cars;
        break;
      case '经商办企业':
        subData = d.company;
        break;
      case '因私出国':
        subData = d.aboard;
        break;
      case '危房改造补助预警':
        subData = d.house;
        break;
      case '低保预警':
        subData = d.basicLiving;
        break;
      case '贫困户预警':
        subData = d.prePoor;
        break;
      case '教育补助预警':
        subData = d.education;
        break;
      case '优抚补助预警':
        subData = d.comfort;
        break;
    }
    this.setState({
      subData: subData,
      subTitle: t
    })
  };

  mask = () => {
    this.setState({
      subData: null
    })
  };

  render() {
    const title = this.state.cutType ? this.data.declare.title : this.data.corrup.title;
    const data = this.state.cutType ? this.data.declare : this.data.corrup;
    return (
      <div className={style.table}>
        <div className={style.rightCut}>
          <div
            onClick={this.active('sb')}
            style={{backgroundColor: this.state.cutType ? '#0183d9' : '#07112c'}}
          >
            申报事项预警
          </div>
          <div
            onClick={this.active('fb')}
            style={{backgroundColor: this.state.cutType ? '#07112c' : '#0183d9'}}
          >
            微腐败预警
          </div>
        </div>
        <table className={style.title}>
          <thead>
          <tr>
            {
              title.map((th, index) => {
                return (
                  <td key={index}>{th}</td>
                )
              })
            }
          </tr>
          </thead>
        </table>
        <div className={style.tbodyBox}>
          <table>
            <tbody>
            {
              data.data.map((tr, index) => {
                return (
                  <tr key={index}>
                    <td><img width='75' src={headImg} alt=""/></td>
                    <td className={style.bottomBorder}>{tr.name}</td>
                    <td className={style.bottomBorder}>{tr.idCard}</td>
                    <td className={style.bottomBorder}>{tr.place}</td>

                    <td className={style.bottomBorder}>{tr.partment}</td>
                    <td className={style.bottomBorder}>{tr.job}</td>
                    <td
                      className={style.bottomBorder + ' ' + style.detail}
                      onClick={this.detailOut(tr.point, data.detail)}
                    >
                      {tr.point}
                    </td>
                    <td></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
        {/* detailOut */}
        {
          this.state.subData
          &&
          <DetailOut
            title={this.state.subTitle}
            data={this.state.subData}
            mask={this.mask}
          />
        }
      </div>
    )
  }
}
