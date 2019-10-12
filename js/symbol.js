//Symbol cria um elemento único não numerável/iterável
const symbol1 = Symbol("name");
const symbol2 = Symbol("age");

console.log(symbol1 == symbol2); //false
console.log(symbol1 === symbol2); //false

let user ={
  [symbol1]:"Matheus",
  [symbol2]:21,
  "altura": 1.68
}
let arrayOfSymbols = Object.getOwnPropertySymbols(user);
console.log(arrayOfSymbols);

console.log(Reflect.ownKeys(user));











