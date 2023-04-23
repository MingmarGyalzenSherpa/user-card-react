import React from "react";
import convertToPercentage from "../Utils/convertToPercentage";
class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.progress = convertToPercentage(this.props.completed, this.props.total);
  }
  render() {
    return (
      <div className="userStats__progress-bar">
        <div
          className="userStats__progress "
          style={{ width: this.progress || 0 + "%" }}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
