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

// console.log(totalSalary);

const carts = [
  {
    name: "phone",
    qty: 10,
    price: 100,
  },
  {
    name: "earpiece",
    qty: 15,
    price: 15,
  },
  {
    name: "charger",
    qty: 3,
    price: 10,
  },
  {
    name: "laptop",
    qty: 10,
    price: 340,
  },
];

const { totalNumber, totalPrice } = carts.reduce(
  (total, cart) => {
    const { qty, price } = cart;
    total.totalNumber += qty;
    total.totalPrice += qty * price;

    return total;
  },
  {
    totalNumber: 0,
    totalPrice: 0,
  }
);

// console.log(totalNumber, totalPrice);

const url = "https://api.github.com/users/marwanoladele/repos";

const fetchKey = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, data) => {
    const { language } = data;
    if (language) {
      if (total[language]) {
        total[language] += 1;
      } else {
        total[language] = 1;
      }
    }

    return total;
  }, {});
  return newData;
};
fetchKey();

const dataObject = fetchKey();

console.log(dataObject);
