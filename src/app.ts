//No uppercase - use lowercase for primitives. Double quate also viable.
const coupon: string = "pizza25";

//Useful to define in advance what to return and create a programmable interface.
function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);
