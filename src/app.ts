class Pizza {
  public toppings: string[] = [];

  //Does not affect javascript output
  //Readonly can only declared on initialisation or declarations and cannot be changed later
  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni");

pizza.addTopping("pepperoni");

//pizza.name = 'ABC' ---> cannot assign but can read.
console.log(pizza.name);
console.log(pizza);
