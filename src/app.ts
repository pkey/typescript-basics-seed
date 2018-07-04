let selectedTopping: string = "pepperoni";

//Pure functions - not mutate any value outside itself
//This one inpure - as it modifies what is outside of the function.

//function returns void type - that is nothing is returned;
//We don't need type.

//Ussualy void is infered - so no need to declare it.
function seletTopping(topping: string): void {
  selectedTopping = topping;
}

//Void can only be assigned null or undefined
let something: void = undefined;
console.log(something);

//selectedTopping("bacon");

console.log(selectedTopping);
