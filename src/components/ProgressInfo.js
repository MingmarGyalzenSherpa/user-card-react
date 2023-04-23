function ProgressInfo({ total, completed, size_type }) {
  const downloadInfo = `${completed || 0} ${size_type || GB} of ${total || 0} ${
    size_type || GB
  }`;
  return <div className="userStats__progressInfo">{downloadInfo}</div>;
}

export default ProgressInfo;
