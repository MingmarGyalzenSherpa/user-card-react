import React from "react";

class Position extends React.Component {
  stringifyPosition() {
    let positionString = "";
    positionString =
      this.props.position && this.props.position.toString().replace(",", "/");
    return positionString;
  }
  render() {
    return (
      <div className="card__user--positionWrapper">
        <p className="userStats__position">{this.stringifyPosition()}</p>
      </div>
    );
  }
}

export default Position;
