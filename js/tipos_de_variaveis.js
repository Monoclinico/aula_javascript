/*
-string
-number
-boolean
-null
-undefined
-symbol (adicionado no ES6)
-Object
-Function
-Array
*/
/*
const textSize = "string".length;
console.log(textSize);

const splittedText = "string".split("r");
console.log(splittedText);

const replacedText = "string".replace("i","a");
console.log(replacedText);

const charText = "string".charAt(2);
console.log(charText);

const sliceText = "string".slice(2);
console.log(sliceText);

const substrText = "string".substr(2,4);
console.log(substrText);



const number = 123.224;
const numberText = "123.224";

const numberString = number.toString();
console.log(numberString);

const numberFixedTwoDecimals = number.toFixed(2);
console.log(numberFixedTwoDecimals);

const numberTextFloating = parseFloat(numberText);
console.log(numberTextFloating);

const numberTextInteger = parseInt(numberText);
console.log(numberTextInteger);

*/
/*
const valueNull = null;
console.log(typeof valueNull);

let undefinedVariable;
console.log(typeof undefinedVariable == "undefined");

const isTrue = true;
const isFalse = false;
console.log(isTrue);
console.log(isFalse);
*/

let user ={
  name: "Anne Jobert",
  idade: 23,
  comida: "Pizza"
}
user.apelido = "Jo";
delete user.comida;

let peso = "peso";
user[peso] = 67.5;
console.log(user.name);
console.log(user.idade);
console.log(user.apelido);
console.log(user.comida);
console.log(user.peso);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let dinheiro = {
  valor: 232515.26
}
Object.assign(user,dinheiro);

console.log(user);

let newObject = Object.assign({},user,dinheiro);
console.log(newObject);

Object.freeze(newObject); //deixa o objeto imutavel
Object.seal(user); //deixa o objeto imutavel, menos os valores




