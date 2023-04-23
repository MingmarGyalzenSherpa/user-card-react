import Status from "./Status";

function StatusWrapper({ status }) {
  return (
    <div className="card__user--statusWrapper">
      <Status status={status} />
    </div>
  );
}

export default StatusWrapper;
