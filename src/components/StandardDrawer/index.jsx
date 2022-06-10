import React, { Component } from 'react';

import { Drawer } from 'antd';

import style from './style.scss';

class StandardDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.drawerContainer}>
        <Drawer visible={this.props.visible} />
      </div>
    )
  }
}

export default StandardDrawer;