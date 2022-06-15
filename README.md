# jackdan_react_echarts
 
------

## 功能列表

- [X] 自定义画布
- [X] 可拖拽效果
- [X] 自适应屏幕分辨率(目前支持是1080)
- [X] 三列布局
- [X] 中国地图
- [X] 北京市

## 功能参照

- [drag](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [DataView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)

## Geo 文件

### 中国地图

- [中国地图geojson](https://github.com/JackDan9/jackdan_react_echarts/blob/master/src/static/json/china.json)

## 版本问题

- 引入antd 4.12.1，出现了

```shell
# Uncaught TypeError: __WEBPACK_IMPORTED_MODULE_0_react__.createContext is not a function
# 解决方案参考: https://stackoverflow.com/questions/54521723/react-default-createcontext-is-not-a-function-when-using-react-redux
npm update react react-dom
```

## 样式说明

### css

### less

- 变量声明的方式

```less
@switchPrefixCls: standard-switch; // 变量类名

@duration: .3s; // 属性变量名

.@{switchPrefixCls} {
  position: relative;
  transition: all @duration cubic-bezier(0.35, 0, 0.25, 1); 
}
```

### scss

- 变量声明的方式

```scss
$switchPrefixCls = 'standard-switch';

// 或者是
// $switchPrefixCls: standard-switch;

$switchPrefixClsBtn: '#{$switchPrefixCls}-btn';

$duration: .3s;

.#{$switchPrefixClsBtn} {
  position: relative;
  transition: all $duration cubic-bezier(0.35, 0, 0.25, 1);
}
```


## Build Setup

```
 # install dependencies
 npm install
 # recommended install dependencies
 cnpm install
 # serve with hot reload at http://localhost:12347/#/main/tworesponsibilities/index
 yarn run dev
 # rebuild it
 yarn run build
```
 
------
 
## Star
- If you like it, please give me a star.
- If you don't like it, please give me suggestions.(1835812864@qq.com)
- Thank you very much.

 
