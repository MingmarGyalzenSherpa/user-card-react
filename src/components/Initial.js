import React from "react";
import "../assets/style/initial.css";
class Initial extends React.Component {
  render() {
    return (
      <div className="initial">
        <h2>{this.props.initial.slice(0, 1)}</h2>
      </div>
    );
  }
}

export default Initial;
