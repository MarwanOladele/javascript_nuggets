const bob = {
  firstName: "Marwan",
  lastName: "Oladele",
  city: "Nigeria",
  siblings: {
    name: "Hikmah",
  },
};

// const firstName = bob.firstName;
// const lastName = bob.lastName;
// const sister = bob.siblings.name;

// console.log(firstName, lastName, sister);

const {
  firstName: myName,
  lastName,
  city,
  siblings: { name: onlySister },
} = bob;
console.log(myName, lastName, city, onlySister);

const printName = ({
  firstName: myName,
  lastName,
  city,
  siblings: { name },
}) => {
  console.log(myName, lastName, city, name);
};

printName(bob);
