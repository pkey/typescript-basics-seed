interface SizesInterface {
  //sizes: string[]; --> we can do this with protected -> only with public.
  availableSizes: string[]; //No way to explicitly state that it will be setter or getter, just return value
  //Units tests come into play here.
}

//Extends is how we can physically extends classes.
abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

interface PizzaInterface extends SizesInterface {
  readonly name: string; //Can define that it is special public property radonly.
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

//Not part of the tutorial
abstract class Toppings {
  constructor(protected toppings: string[]) {}

  set availableToppings(toppings: string[]) {
    this.toppings = toppings;
  }

  get availableToppings() {
    return this.toppings;
  }
}

//Turns out you cannot extends multiple classes. This is where Mixins come in - not that convenient?
class Pizza extends Sizes implements PizzaInterface {
  public toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni", ["small", "medium"]);

console.log(pizza.availableSizes);

pizza.updateSizes(["large"]);

console.log(pizza.availableSizes);
