//Abtract class cannot be instantiated. Indicating that we want just to extends this class.
//We can esport abtract classes as well.
abstract class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

//Cannot do this thing then.
//new Sizes(["small"]);
class Pizza extends Sizes {
  public toppings: string[] = [];

  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni", ["small", "medium"]);
console.log(pizza.availableSizes);

pizza.addTopping("pepperoni");
