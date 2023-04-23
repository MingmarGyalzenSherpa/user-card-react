import Title from "./Title";

function TitleWrapper() {
  return (
    <div className="card card__title">
      <Title className={"card__title-item card__title-name"} title={"Name"} />
      <Title
        className={"card__title-item card__title-position"}
        title={"Position"}
      />
      <Title
        className={"card__title-item card__title-status"}
        title={"Status"}
      />
      <Title
        className={"card__title-item card__title-progress"}
        title={"Progress"}
      />
      <Title
        className={"card__title-item card__title-action"}
        title={"Action"}
      />
    </div>
  );
}

export default TitleWrapper;
