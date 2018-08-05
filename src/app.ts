//Dictionary or data structure as dictionary
interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): void;
  [key: number]: string; //Added index signature. And they can be looked up dynamically
  //"1" will be stored as string anyways, regardless of what's defined here.
  dictionary?: {
    [key: string]: any;
  }; //Also possible to nest
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
pizza[1] = "xyz";
pizza.toppings = 1;
