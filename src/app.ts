const pizza = {
  name: "Pepperoni",
  price: 15,
  //Better way to define functions
  getName() {
    return this.name;
  }
};

const toppings = ["pepperoni"];

const order = { pizza, toppings };

//Same as
/*
const order = { pizza: pizza, toppings:tp[] };
*/

function createOrder(pizza: any, toppings: any) {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
