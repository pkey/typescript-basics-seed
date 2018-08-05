type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: "Blazing Inferno", toppings: 5 };

//When we don't know what ype ar we getting from somewhere, and then we can convert.

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  //Old way of "enabling" autocompletion
  //return (<Pizza>JSON.parse(obj)).name;

  //New way of doing the same thing
  return (JSON.parse(obj) as Pizza).name;
}

//Here you get autocompletion
getNameFromJSON(serialized);
