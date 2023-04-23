import React, { useState } from "react";
import CheckBox from "./CheckBox";
import NameWrapper from "./NameWrapper";
import Position from "./Position";
import StatusWrapper from "./StatusWrapper";
import ProgressWrapper from "./ProgressWrapper";

import "../assets/style/userStats.css";
import ActionWrapper from "./ActionWrapper";
function UserCard({ userInfo }) {
  const {
    full_name,
    designation,
    active_status,
    download_completed_rate,
    invited_status,
  } = userInfo;
  const [user, setUser] = useState({
    name: full_name,
    designation: designation,
    active_status: active_status,
    download_completed_rate: download_completed_rate,
    invited_status: invited_status,
  });

  console.log(user);
  return (
    <div className="card card__user">
      <CheckBox />
      <NameWrapper name={user.name} />
      <Position position={user.designation} />
      <StatusWrapper status={user.active_status} />
      <ProgressWrapper download_completed_rate={user.download_completed_rate} />
      <ActionWrapper action={invited_status} />
    </div>
  );
}

export default UserCard;
