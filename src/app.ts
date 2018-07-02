//Rest parameters. As saying - give me rest of them.
//Can also define some additional parameters first
function sumAll(message, ...arr) {
  console.log(message);
  arr.reduce((prev, next) => prev + next);
}

const sum = sumAll("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);
