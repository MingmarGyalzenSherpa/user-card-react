import Button from "./Button";

function ActionWrapper({ action }) {
  let label;
  let classNames = "userStats__actionBtn userStats__actionBtn--";
  if (action == "invited") {
    label = "Remove";
    classNames += "remove";
  } else {
    label = "Invite";
    classNames += "invite";
  }
  return (
    <div className="card__user--actionWrapper">
      <Button label={label} classNames={classNames} />
    </div>
  );
}

export default ActionWrapper;
