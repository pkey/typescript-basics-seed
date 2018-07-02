//import { something } from "somewhere"

const pizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"]
};

//Useful when transforming variable names
function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}

//Same syntax as importing from somewhere. Basically you are just asking for some of the parameters.
const { pizzaName } = order(pizza);
console.log(pizzaName);

const toppings = ["pepperoni", "bacon", "chilli"];

//const [first, second, third] = toppings;

//OR

function logToppings([first, second]: any) {
  console.log(first, second);
}

logToppings(toppings);
