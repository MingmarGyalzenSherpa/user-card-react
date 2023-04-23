function Status({ status }) {
  let classNames = "userStats__status ";
  let label = "Inactive";
  switch (status) {
    case "active":
      classNames += "userStats__status--isActive";
      label = "Active";
      break;
    case "blocked":
      classNames += "userStats__status--isBlocked";
      label = "Blocked";
      break;
    case "in_active":
    default:
      classNames += "userStats__status--isNotActive";

      break;
  }

  return <div className={classNames}>{label}</div>;
}

export default Status;
