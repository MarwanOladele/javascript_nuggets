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
appState = 'error';

const app = {
  [appState]: true,
}; 
app['name'] = 'test';

console.log(app);