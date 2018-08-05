class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

//Possible to extend - still I don't think that's how it works, no?
//Sizes cannot beb a base class;
class Pizza extends Sizes {
  public toppings: string[] = [];

  //Are sizes automatically attached to a Pizza class here?
  //Answer - yes, they are shown on javascript raw file.
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
