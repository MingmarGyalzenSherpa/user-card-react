import React from "react";
import shortName from "../Utils/shortName";
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: this.props.name,
      short_name: shortName(this.props.name),
      name_displayed: shortName(this.props.name),
      short_displayed: true,
    };
  }

  handleClick = () => {
    if (this.state.short_displayed) {
      this.setState({
        name_displayed: this.state.full_name,
        short_displayed: false,
      });
    } else {
      this.setState({
        name_displayed: this.state.short_name,
        short_displayed: true,
      });
    }
  };

  render() {
    return (
      <div className="userStats__name" onClick={this.handleClick}>
        {this.state.name_displayed || "Unknown"}
      </div>
    );
  }
}

export default Name;
