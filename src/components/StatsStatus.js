import React from "react";

class StatsStatus extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.status
            ? "  stats__status stats__status--isActive"
            : " stats__status stats__status--isNotActive"
        }
      ></div>
    );
  }
}

export default StatsStatus;
