const people = ['Marwan', 'John', 'Test', 'Anonymous']

// const first = people[0]
// const second = people[1]
// const third = people[2]
// const fourth = people[3]


// const [first, second, third, fourth] = people
// console.log(first, second, third, fourth);


const [first, , third, fourth] = people
console.log(first, third, fourth);