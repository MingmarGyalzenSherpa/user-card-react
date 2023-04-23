function shortName(name) {
  let shortName = name;
  if (name.length > 17) {
    shortName = name.slice(0, 15) + "...";
  }
  return shortName;
}

export default shortName;
