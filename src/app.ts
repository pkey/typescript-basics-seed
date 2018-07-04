//Javascript has types such as new Number(); new Boolean() - didn't know.

// let number = new Number(2);
// console.log(number);

//Typescript infer type for us if we don't define us. Number is for description.
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

//We can define what to return and it will check for it.
function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza costs: ${cost}`);
