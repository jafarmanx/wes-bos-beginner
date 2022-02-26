// console.log(`it works!`);
// this is a function defenition

// function calculateBill(billAmount, taxRate) {
//   // this is a function block
//   console.log(`Running Calculate Bill`);
//   const total = billAmount * 1 + taxRate;
//   return total;
// }

// // this is a function call
// const myTotal = calculateBill(100, 0.0825);

// // console.log(`Your total bill is ${myTotal}`);
// console.log(`Your total is ${calculateBill(100, 0.0825)}`);

// const add = (a, b = 3) => a + b;

// console.log(add(1, 2));

// Methods!!
// Methods are functions in objects
const objectVarible = {
  name: `Ahsen Jaffery`,
  // Method
  sayHi(name = this.name) {
    console.log(`Hello ${name}`);
  },
  // short hand method
  yellHi(name = this.name) {
    console.log(`WHAT UP ${name}`);
  },
  // Arrow method
  wisperHi: () => {
    // you cannot include this in a arrow function
    console.log(`hello please keep it quiet.. shhhh...`);
  },
};

// Calback fucntions
// when some clicks something do something or when time passes then do somehting
// click callback
// const button = document.querySelector('.clickMe');
// button.addEventListener('click', objectVarible.yellHi);

// debugging informaiton

/* disable eslint */
const people = [
  { name: 'Sunny', cool: true, country: 'United Sates' },
  { name: 'Oscar', cool: false, country: 'Mexico' },
  { name: 'Whota', cool: false, country: 'Jamica' },
];

people.forEach((person, index) => {
  console.info(person.name);
  if (person.name === 'Sunny') {
    console.error('super cool!');
  }
});

console.table(people);

function doALotOfStuff() {
  console.group(`Hello`);
  console.log(`whats up?`);
  console.log(`nothing`);
  console.groupEnd(`Hello`);
}
