import React from "react";
import "../assets/style/userCard.css";
import Initial from "./Initial";
import Stats from "./Stats";
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      titles: this.props.user.titles,
      progress: this.props.user.progress,
      active: this.props.user.active,
    };
  }
  render() {
    return (
      <div className="userCard">
        <Initial initial={this.state.name} />
        <Stats
          stats={{
            name: this.state.name,
            titles: this.state.titles,
            active: this.state.active,
            progress: this.state.progress,
          }}
        />
      </div>
    );
  }
}

export default UserCard;
