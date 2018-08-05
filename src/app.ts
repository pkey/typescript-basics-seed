//We can also extend interfaces, implements them, etc.
interface Sizes {
  sizes: string[];
}

//So the sizes property is added to the Pizza - I don't think that is empirically correct.
interface Pizza extends Sizes {
  name: string;
  getAvailableSizes(): void;
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    }
  };
}

pizza = createPizza("Pepperoni", ["small", "medium"]);
