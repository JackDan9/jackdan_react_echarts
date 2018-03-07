import React, {Component} from "react";
import style from "./detailOut.scss";

export default class Warn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      title: this.props.title
    };
  }

  render() {
    return (
      <div
        className={style.detailOut}
        onClick={this.props.mask}
      >
        <div className={style.box}>
          <div className={style.title}>{this.state.title}</div>
          <div className={style.content}>
            {
              this.state.data.map((item, index) => {
                return (
                  <div key={index}>
                    <span>{item.title}</span>&nbsp;:&nbsp;<span>{item.content}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
