/*Interface is more prefered approach when we are dealing
 with more complex datastructures or datasets compared to types.
 */
//type Pizza = {

//Interface is extendable compared to a type
//Allows us to define structure or shape of a object

//Interface is prefered way to create a cotract btw variable and shape of it, telling how it looks like.
interface Pizza {
  name: string;
  sizes: string[];
}

//Interfaces can be combined
interface Pizzas {
  data: Pizza[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  //Shorthand syntax of creating object literals under the same name
  return {
    name,
    sizes
  };
}

pizza = createPizza("Pepperoni", ["small", "medium"]);
