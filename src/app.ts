type Pizza = { name: string; toppings: number };

let pizza: Pizza = { name: "pepperoni", toppings: 5 };

let serialized = JSON.stringify(pizza);

//If we know what we might be getting (as from stringified JSON), we might tell compiler to parse it as that type and it becomes happy
function getNameFromJson(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}

console.log(getNameFromJson(serialized));
