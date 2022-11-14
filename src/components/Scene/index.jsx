/**
 * 场景画布 组件
 * 
 */
import React, { Component } from 'react';
import Grid from './component/Grid';
import LeftPanel from './component/LeftPanel';
import Menu from './component/Menu';
import style from "./style.scss";

class Scene extends Component {
  constructor(props) {
    super(props);
    this.sceneContainer = null;
    this.canvasStyle = {
      width: 1200,
      height: 740,
      scale: 100,
      color: '#00000',
      background: '#ffffff',
      fontSize: 14,
      inset: '100px 40px 35px 225px'
    }
  }

  componentDidMount() {
    this.sceneContainer = document.querySelector("#scene");

  }

  handleMouseDown = (e) => {
    // debugger;
  }

  render() {
    return (
      <div 
        id="scene" 
        className={style.sceneContainer}
        onMouseDown={this.handleMouseDown}
        style={{
          ...this.canvasStyle,
          width: this.canvasStyle.width + 'px',
          height: this.canvasStyle.height + 'px'
        }}>
        <Grid />
        <Menu />
        <LeftPanel />
      </div>
    )
  }
  
}

export default Scene;