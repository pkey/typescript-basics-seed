class Sizes {
  //So it works with privage as well
  constructor(private sizes: string[]) {}

  //Importants setters and getters automatically are invoked when specific values is set somewhere.

  //Setters and getters are always public;
  //Setters may only have one parameter and assign one thing.
  //The exact same name need to be used in the code
  set availableSizes(sizes: string[]) {
    console.log("setter was called");
    this.sizes = sizes;
  }

  //Javacsript compiles these functions on prototype
  //And it automatically binds setter/getter under the same name on the prototype.
  get availableSizes() {
    return this.sizes;
  }
}

const sizes = new Sizes(["small", "medium"]);
//invoke getter
console.log(sizes.availableSizes); //Name must correspond to the getter/setter name

//invoke setter
sizes.availableSizes = ["medium", "large"];

console.log(sizes.availableSizes);

class Pizza {
  public toppings: string[] = [];

  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni");

pizza.addTopping("pepperoni");
