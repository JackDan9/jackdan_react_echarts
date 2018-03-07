
export default class Validator {
  //自定义验证规则,和data-options 里面的对应即可
  verify = {

    require: (value) => { //必须
      return value.length > 1;
    },
    chinese: (value) => { //中文
      return /^[\u4e00-\u9fa5\-_，。\（）\s　]*$/.test(value);
    },

    requireData: (value) => {
      return value.length > 0;
    },
    number: (value) => {
      return /^[0-9]*$/.test(value);
    },
    string: (value) => {
      return /(^[\w-]+(\.[\w-]+)+(\.[\w-])+$)|(^[\w-]+$)|(^[\w-]+(\.[\w-]+)+$)/.test(value);
    },
    // file: (value) => {
    //     return /^.*?\.(apk)/.test(value);
    // },

    code: (value) => { //只能填写字母、数字、下划线
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
    },
    age: (value) => { //年龄
      return /^[1-9]\d*$/.test(value);
    },
    decimal: (value) => { //小数点后最多2位
      return /^\d{1,7}\.?\d{0,2}$/.test(value);
    },
    phone: (value) => { //电话号码
      return  /^1[34578]\d{9}$/.test(value);
    },
    email: (value) => { //邮箱验证
      return  /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    },
    pw: (value) => { //密码验证8~20位,d{8,20}不好用,大神记得改改！
      return /^[0-9A-Za-z\-_,.:\""\&\()\s　]+$/.test(value) && value.length > 5 && value.length < 21;
    }
  };

  //确定时统一验证，ele为容器ID，可以不传
  checkRule(ele) {
    let element = ele? document.querySelector('#'+ele).querySelectorAll('.e-validator'):document.querySelectorAll('.e-validator');
    let arr = [];
    //遍历数组，获取验证规则
    for (let key of element){
      let valid = key.getAttribute('data-options');
      let value = key.value;
      let obj ={valid,value};
      arr.push(obj);
    }

    //arr转Map存入对应的元素下标和验证结果，最多支持两种验证规则
    let reArr = [];
    for(let [key,v] of new Map(arr.map((v,key) => [key,v]))){
      let l = v.valid.split(' ');
      let elm = key;
      let obj = {};
      if(l.length === 1){
        if(v.value || v.valid === 'require'){
          let c = this.verify[v.valid].call(this, v.value);
          obj ={elm,c};
          reArr.push(obj);
        }
      }
      if(l.length === 2){
        let c = this.verify[l[0]].call(this, v.value) && this.verify[l[1]].call(this, v.value);
        obj ={elm,c};
        reArr.push(obj);
      }
    }

    //返回验证结果
    let le = reArr.length;
    for(let key of reArr){
      if(!key.c) {
        element[key.elm].style.cssText ='box-shadow: 0 0 1px 2px red inset;outline: none !important;';
      }
      else {
        le--;
      }
    }
    return le === 0; //true 表明验证通过
  }

  //添加元素监听事件，整个document
  bindOnBlur = () =>{
    let self = this;
    let elements = document.querySelectorAll('.e-validator');
    for (let e of elements){
      if(e.type === 'select-one'){
        e.addEventListener('change',() => {self.onlyVerify(e)}, false);
      }else{
        e.addEventListener('keyup',() => {self.onlyVerify(e)}, false);
        e.addEventListener('blur',() => {self.onlyVerify(e)}, false);
      }
      //e.addEventListener('blur',() => {self.onlyVerify(e)}, false);
    }
    elements = null; //等待回收
  }

  //提取验证规则，方便添加多个监听事件
  onlyVerify = (e) => {
    let ei =e.getAttribute('data-options');
    let status = false;
    let sp = ei.split(' ');
    if(sp.length === 1) status = this.verify[ei].call(this, e.value);
    if(sp.length === 2) status = this.verify[sp[0]].call(this, e.value) && this.verify[sp[1]].call(this, e.value);
    if(!status){
      e.style.cssText ='box-shadow: 0 0 1px 2px red inset;outline: none !important;'
    }else{
      e.style.cssText ='box-shadow: none;'
    }
  }

  //重置变红输入框,视觉效果
  reset = () => {
    let elements = document.querySelectorAll('.e-validator');
    for (let e of elements){
      e.style.cssText ='box-shadow: none;'
    }
  }

  //移除监听事件
  removeVerify = () => {
    let elements = document.querySelectorAll('.e-validator');
    for (let e of elements){
      e.removeListeners('change',() => {this.onlyVerify(e)}, false);
      e.removeListeners('keyup',() => {this.onlyVerify(e)}, false);
    }
  }
}
