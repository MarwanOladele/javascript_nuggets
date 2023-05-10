const people = [
  {
    name: "John",
    age: 21,
    position: "developer",
  },
  {
    name: "Anna",
    age: 45,
    position: "UI/UX",
  },
  {
    name: "Marwan",
    age: 25,
    position: "Teacher",
  },
  {
    name: "Temitope",
    age: 30,
    position: "the user",
  },
];

// const ages = people.map((person) => person.age + 1000);
// console.log(ages);

const newPerson = people.map((person) => {
  return {
    newName: person.name.toUpperCase(),
    newAge: person.age * 20,
  };
});

console.log(newPerson);
