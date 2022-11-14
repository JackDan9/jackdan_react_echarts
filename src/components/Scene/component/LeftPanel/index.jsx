import React, { Component } from 'react';
import style from './index.scss';

class LeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.leftPanelContainer}>
        <div className={style.leftPanelMenu}>
          <div className={style.leftPanelDialog}>
            <svg className={style.leftPanelDialogIcon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10042" width="200" height="200"><path d="M896 896H128a42.666667 42.666667 0 0 0 0 85.333333h768a42.666667 42.666667 0 0 0 0-85.333333zM469.333333 853.333333h85.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V170.666667a85.333333 85.333333 0 0 0-85.333333-85.333334h-85.333334a85.333333 85.333333 0 0 0-85.333333 85.333334v597.333333a85.333333 85.333333 0 0 0 85.333333 85.333333z m0-682.666666h85.333334v597.333333h-85.333334zM853.333333 426.666667h-85.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v256a85.333333 85.333333 0 0 0 85.333333 85.333333h85.333333a85.333333 85.333333 0 0 0 85.333334-85.333333v-256a85.333333 85.333333 0 0 0-85.333334-85.333333z m0 341.333333h-85.333333v-256h85.333333zM170.666667 853.333333h85.333333a85.333333 85.333333 0 0 0 85.333333-85.333333v-341.333333a85.333333 85.333333 0 0 0-85.333333-85.333334H170.666667a85.333333 85.333333 0 0 0-85.333334 85.333334v341.333333a85.333333 85.333333 0 0 0 85.333334 85.333333z m0-426.666666h85.333333v341.333333H170.666667z" fill="#37485D" p-id="10043"></path></svg>
            <span>图表库</span>
          </div>
        </div>
        <div id='leftPanelContent' className={style.leftPanelContent}>
          <div>
            <div className={style.leftPanelContentItem}>
              <div className={style.itemTitle}>
                <div className={style.titleText}>
                  <span>基本图表</span>
                </div>
              </div>
              <div className={style.itemInternal}>
                <div className={style.itemShape}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeftPanel;