//It's possible to inline this kind of things, nice!

let pizza: {
  name: string;
  price: number;
  getName(): string;
} = {
  name: "Plain Old Pepperoni",
  price: 20,
  getName() {
    return pizza.name;
  }
};

console.log(pizza.getName());
