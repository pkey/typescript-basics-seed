//Compiled output does not change - public/private do not exist in javascript world.
class Pizza {
  // public name: string;
  public toppings: string[] = [];

  constructor(private name: string) {
    // sugar syntax to do what was written before. Can also be public.
    //this.name = name;
  }

  //By default methods are public in typescript
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni");

//pizza.name - would be accesable in JS. So it's may only cause build time errors.
pizza.addTopping("pepperoni");

console.log(pizza);
