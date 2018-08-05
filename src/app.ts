/*

//const date = +new Date(); // + converts it into a timestamp. + is an instance method.
const date = Date.now(); // Static method.
console.log(date);

*/

//Main thing - accesing something without creating a new instance
class Coupon {
  static allowed = ["Pepperoni", "Blazing Inferno"];
  static create(percentage: number) {
    return `PIIZA_RESTAURANT_${percentage}`;
  }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));
