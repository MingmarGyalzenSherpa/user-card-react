import React from "react";
import "../assets/style/stats.css";
class Stats extends React.Component {
  stringifyTitles() {
    let titlesString = this.props.stats.titles.toString().replace(",", "/");
    return titlesString;
  }
  render() {
    return (
      <div className="stats">
        <div className="stats__name">{this.props.stats.name}</div>
        <div
          className={
            this.props.stats.active
              ? "  stats__status stats__status--isActive"
              : " stats__status stats__status--isNotActive"
          }
        ></div>
        <div className="stats__titles">{this.stringifyTitles()}</div>
        <div className="stats__progress-bar">
          <div
            className="stats__progress "
            style={{ width: this.props.stats.progress + "%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Stats;
