//Interfaces also allow us to define what functions return
interface Pizza {
  name: string;
  sizes: string[];
  getAvailableSizes(): string[]; //One way of doing this
}

type getAvailableSizes = () => string[]; //Another way of doing the same thing
let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    }
  };
  // also pissible: as Pizza;
}

pizza = createPizza("Pepperoni", ["small", "medium"]);
