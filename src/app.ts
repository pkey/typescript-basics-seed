let pizzaSize: string = "small";

//With a union operator you can actually define what kind of variable to you want to receive.

//Nothing of this gets translated to plain javascript. It's just a build step process.
//Works with number as well.
function selectSize(size: "small" | "medium" | "large"): void {
  pizzaSize = size;
}

selectSize("medium");

console.log(pizzaSize);
