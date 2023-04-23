import TitleWrapper from "./TitleWrapper";
import "../assets/style/userInfoContainer.css";
import "../assets/style/card.css";
import UserCard from "./UserCard";

import companyInfo from "../companyInfo.json";
function UserInfoContainer() {
  return (
    <div className="userInfoContainer">
      <TitleWrapper />
      {companyInfo.users.map((user) => {
        return <UserCard key={user.full_name} userInfo={user} />;
      })}
      <UserCard userInfo={companyInfo.users[0]} />
    </div>
  );
}

export default UserInfoContainer;
