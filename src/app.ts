class Pizza {
  name: string; //You need to declare variables here in TS.
  toppings: string[] = []; //Defaulting at the top

  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

/* Classical way of doing thing

function Pizza(name: string) {
  this.name = name; //Works when disabling strict.
  this.toppings = [];
}

//Possible to add functions on a prototype
Pizza.prototype.addTopping = function addTopping(topping: string) {
  this.toppings.push(topping);
};

*/

const pizza = new Pizza("Pepperoni");

pizza.addTopping("pepperoni");

console.log(pizza);
