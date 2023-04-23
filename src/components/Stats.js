import React from "react";
import "../assets/style/stats.css";
import StatsTitle from "./Position";
import StatsName from "./Name";
import StatsStatus from "./StatsStatus";
import ProgressBar from "./ProgressBar";
class Stats extends React.Component {
  render() {
    return (
      <div className="stats">
        <StatsName name={this.props.stats.name} />
        <StatsStatus status={this.props.stats.status} />
        <StatsTitle titles={this.props.stats.titles} />
        <ProgressBar progress={this.props.stats.progress} />
      </div>
    );
  }
}

export default Stats;
