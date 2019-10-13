//Rest e Spread  Operator

//antes do ES6:

function sum(a) {
  var total =0;
  for (var i=0;i<arguments.length;i++){
    total += arguments[i]; 
  }
  return total;
}
console.log(sum(4,6,3,7));

//com o ES6
//rest operator:
function sum2(...a) {
 
  return a.reduce(((acc,value)=>acc+value),0);
}
console.log(sum2(4,6,3,7));

const sum3 = (...p) => {
  return p.reduce(((acc,value)=>acc+value),0);
}
console.log(sum3(43,22,33));

const sum4 = (a,b,...p) => {
  return a+b+p.reduce(((acc,value)=>acc+value),0);
}
console.log(sum4(43,22,33));


//spread operator
//Em arrays, strings, na definição de objetos literais e objetos iteráveis.
//Ao construir um objeto literal a partir de outro, utilizando o spread operator, a ordem é importante pois:
//A ordem define quais valores das chaves com o mesmo nome irão prevalecer.
let lista = [1,42,5,24,2];
function teste4995(){

  return arguments;
}
console.log(teste4995(...lista));

let lista23142 = [...lista, 23,41,44];
console.log(lista23142);

let obj46 = {
  test:566
}
let obj47 = {
  ...obj46,
  test2: 999

}
console.log(obj47.test);

var str42 = "teste";
var strArr99 = [...str42];
console.log(strArr99);
//Destructuring

var cores = ["azul","vermelho","amarelo"];

var azul1 = cores[0];
var vermelho1 = cores[1];
var amarelo1 = cores[2];

var [azul2,vermelho2,amarelo2] = cores;

console.log(azul1 + "\n"+azul2);

var objetoA = {
  name: "A",
  props: {
    age: 35,
    color:["black","red"]
  }
}
var {name:nameA} = objetoA;
var {props: {age: idade, color: [pretoA,vermelhoA]}} = objetoA;
console.log(nameA);
console.log(idade);
console.log(pretoA);
console.log(vermelhoA);

function sum5 ([a,b]=[0,0]){

  return a+b;  
}

console.log(sum5([7,]));










