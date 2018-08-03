//More readable approach to let typescript compiler know that we did this intentionaly
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => {
  return x * y;
  // const q = y || 1; //Or parameter assigns that one if y is undefined
  // return x * q;
};

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
