import UserCard from "./components/UserCard";
import React from "react";

import "./assets/style/app.css";
import users from "./users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <UserCard
          user={{
            name: "Roshan Shrestha",
            titles: ["Mentor", "SSE"],
            progress: 55,
            active: true,
          }}
        /> */}
        {users.map((user) => {
          return (
            <UserCard
              user={{
                name: user.name,
                titles: user.titles,
                progress: user.progress,
                active: user.active,
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
