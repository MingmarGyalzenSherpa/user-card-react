import ProgressBar from "./ProgressBar";
import ProgressInfo from "./ProgressInfo";

function ProgressWrapper({ download_completed_rate }) {
  const { total, completed, size_type } = download_completed_rate;

  return (
    <div className="card__user--progressWrapper">
      <ProgressBar total={total} completed={completed} />
      <ProgressInfo total={total} completed={completed} size_type={size_type} />
    </div>
  );
}

export default ProgressWrapper;
