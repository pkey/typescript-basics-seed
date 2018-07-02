const pizzas = [
  {
    name: "Pepperoni",
    toppings: ["pepperoni"]
  }
];

const mappedPizzas = pizzas.map(pizza => {
  return pizza.name.toUpperCase();
});

const pizza = {
  name: "Something",
  getName: function() {
    console.log(this.name);
  },
  getName2: () => console.log(pizza.name)
};

//function() does create new context while arrow function does not.
//Only use arrow functions when you need them
pizza.getName();

pizza.name = "Something else";
pizza.getName2();
