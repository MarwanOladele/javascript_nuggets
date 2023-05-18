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
    age: 21,
    position: "Teacher",
  },
  {
    name: "Temitope",
    age: 30,
    position: "the user",
  },
];

// FILTER
const youngPeople = people.filter((person) => person.age <= 25)[0].name;
// console.log(youngPeople);

const developer = people.filter((person) => person.position === "developer");
// console.log(developer);

// FIND
const age = people.find((person) => {
  if (person.age === 21) {
    return person
  }
});
console.log(age);
