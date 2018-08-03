/*Tuples can be a good use case for Google Maps Api, or third party lib or your own api
when you don't always get back array of objects
*/

//Use when you absolutely know that the data structure is going to definitely be like this.
//It's like union type but inside the array.
let pizza: [string, number, boolean];

pizza = ["Pepperoni", 20, true];

//This is with or operator - allows more flexibility
let something: (number | string)[];

something = ["string", 2];
