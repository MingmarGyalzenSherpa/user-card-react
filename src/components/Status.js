function Status({ status }) {
  let classNames = "userStats__status ";
  switch (status) {
    case "active":
      classNames += "userStats__status--isActive";
      break;
    case "blocked":
      classNames += "userStats__status--isBlocked";
      break;
    case "in_active":
    default:
      classNames += "userStats__status--isNotActive";
      break;
  }

  return <div className={classNames}>Active</div>;
}

export default Status;
