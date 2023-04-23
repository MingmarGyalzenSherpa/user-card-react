import Initial from "./Initial";
import Name from "./Name";

function NameWrapper({ name }) {
  console.log(name);
  return (
    <div className="card__user--nameWrapper">
      <Initial name={name} />
      <Name name={name} />
    </div>
  );
}

export default NameWrapper;
