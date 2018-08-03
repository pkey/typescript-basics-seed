//More readable approach to let typescript compiler know that we did this intentionaly
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  if (y) {
    return x * y;
  }
  return x;
};

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
