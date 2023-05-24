const people = [
  {
    name: "John",
    age: 21,
    role: "manager",
    salary: 300,
  },
  {
    name: "Marwan",
    age: 30,
    role: "developer",
    salary: 200,
  },
  {
    name: "Temitoper",
    age: 34,
    role: "designer",
    salary: 100,
  },
  {
    name: "Olaolu",
    age: 56,
    role: "intern",
    salary: 50,
  },
];

const totalSalary = people.reduce((total, person) => {
  total += person.salary;

  return total;
}, 0);

console.log(totalSalary);