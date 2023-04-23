import UserCard from "./components/UserCard";
import React from "react";

import "./assets/style/app.css";

import Button from "./components/Button";
import UserInfoContainer from "./components/UserInfoContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserInfoContainer />
      </div>
    );
  }
}

export default App;
