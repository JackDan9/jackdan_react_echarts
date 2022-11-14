import React, { Component } from 'react';
import style from './index.scss';

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.menuContainer}>
        <div className={style.toolContainer}>

        </div>
        <div className={style.tabsContainer}>
          <div className={style.toolWrap}>
            <div className={style.navigationTab}>
              <div className={style.tabBlockBox}>
                {/* <div className={[`style.tabBlockItem`, `style.navigationBanBtn`].join(' ')}> */}
                <div className={style.tabBlockItem} style={{
                  marginLeft: 16
                }}>
                  <svg className={style.itemIconCenter} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6840" width="200" height="200"><path d="M532.992 323.52h-6.528V140.928c0-68.288-31.552-96.768-70.4-57.92L94.72 443.968a99.968 99.968 0 0 0 0.064 140.992l358.592 357.248c38.848 38.656 73.088-0.64 73.088-58.048v-192.64h54.336c156.8 0 276.352 84.096 349.76 246.464 14.336 29.44 29.44 22.976 29.44 0-3.2-289.28-200.448-614.464-427.008-614.464z" p-id="6841"></path></svg>
                </div>
                <div className={style.tabBlockItem}>
                  <svg className={style.itemIconCenter} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5929" width="200" height="200"><path d="M567.936 82.944c-38.848-38.784-70.4-10.368-70.4 57.92v182.592h-6.528c-226.624 0-423.872 325.248-426.944 614.4 0 23.04 15.104 29.504 29.44 0 73.344-162.24 192.96-246.4 349.76-246.4h54.336v192.64c0 57.472 34.24 96.768 73.088 58.048l358.592-357.312a99.84 99.84 0 0 0 0.064-140.928l-361.408-360.96z" p-id="5930"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;