const toppings = ["bacon", "chilli"];
const newToppings = ["pepperoni"];

//Spread operator creates new references to the object, so it's immutable
const allToppings = [...toppings, ...newToppings];

console.log(allToppings);
