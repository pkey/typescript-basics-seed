let sumOrder: Function;

sumOrder = (price: number, quantity: number): number => {
  return price * quantity;
};

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
