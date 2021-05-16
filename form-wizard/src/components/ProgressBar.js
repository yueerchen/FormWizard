import React from "react";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeClassName = "progressbar-dots active";
    const className = "progressbar-dots";
    return (
      <div className="progress-wrap">
        <div className="line-progress-bar">
          <div className="line"></div>
          <ul className="checkout-bar">
            <li className={this.props.step === 1 ? activeClassName : className}>
              <span>step 1</span>
            </li>
            <li className={this.props.step === 2 ? activeClassName : className}>
              <span>step 2</span>
            </li>
            <li className={this.props.step === 3 ? activeClassName : className}>
              <span>confirm</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
