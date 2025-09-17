function pizzaOven(name, type, cheese, extras) {
  var pizza = {};
  pizza.name = name;
  pizza.type = type;
  pizza.cheese = cheese;
  pizza.extras = extras;
  return pizza;
}

console.log(
  pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
  )
);
console.log(
  pizzaOven(
    "hand tossed",
    "marinarella",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
  )
);
console.log(
  pizzaOven("italian pizza", "traditional", ["feta"], ["tobmato", "basel"])
);
console.log(
  pizzaOven(
    "white pizza",
    "traditional",
    ["mozzarella", "feta"],
    ["white sose"]
  )
);

function randomPizza(name, type, cheese, extras) {
  let pizza = {};

  let randomName = Math.floor(Math.random() * name.length);
  let randomType = Math.floor(Math.random() * type.length);
  let randomCheese = Math.floor(Math.random() * cheese.length);
  let randomExtras = Math.floor(Math.random() * extras.length);

  pizza.name = name[randomName];
  pizza.type = type[randomType];
  pizza.cheese = cheese[randomCheese];
  pizza.extras = extras[randomExtras];

  return pizza;
}

let pizzaName = ["deep dish", "hand tossed", "italian pizza", "white pizza"];
let type = ["spetial", "marinarella", "traditional", "regular"];
let cheese = [
  ["mozzarella"],
  ["mozzarella", "feta"],
  ["feta"],
  ["mozzarella", "sheder"],
];
let extras = [
  ["pepperoni", "sausage"],
  ["mushrooms", "olives", "onions"],
  ["tobmato", "basel"],
  ["white sose"],
];

console.log(randomPizza(pizzaName, type, cheese, extras));
