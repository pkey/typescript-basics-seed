//Strict type checking restricts as from assigning null to already assigned values of other type

// in tsconfig - strictNullCheck = true || strict = true
// We are overriding javascripts default behavior.

//May use pipe operator to indicate that it can actually be null. Called union types
let coupon: string | null | undefined = "pizza25";

function removeCoupon(): void {
  coupon = undefined;
}

console.log(coupon);

removeCoupon();

console.log(coupon);
