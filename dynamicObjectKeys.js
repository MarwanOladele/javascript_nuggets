// dot notation
const data = {
  name: "foo",
};
data.age = 23;
// console.log(data);

// square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};
console.log(items["featured-items"]);
console.log(data["name"]);

let appState = "loading";
appState = "error";

const app = {
  [appState]: true,
};
app["name"] = "test";

const state = {
  loading: true,
  name: "",
  job: "",
};

const updateState = (key, value) => (state[key] = value);

updateState("name", "marwan");
updateState("job", "dev");
updateState("loading", false);
console.log(state);
