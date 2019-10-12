//Arrow functions

let sum = (a,b) => a+b;

let mult = (a,b) => {
  return a * b;
}

let pow2 = a => a*a;

let createObj = () => ({test:123});

console.log(sum(5,4));
console.log(mult(5,4));
console.log(pow2(4));
console.log(createObj().test);


//Default Function Arguments

function soma(a,b=2){
  return a+b;
}
function soma2(a=1,b=2){
  return a+b;
}
function soma3(a,b=a){
  return a+b;
}
function soma4(a,b=(()=>Math.random()*10)()){
  return a+b;
}

console.log(soma(3));
console.log(soma2(3));
console.log(soma3(3));
console.log(soma4(3));

//Enhanced Object Literals

var prop1 = "Digital Innovation One";
var obj1 = {
  prop1
}
console.log(obj1.prop1);

function teste233(){
  return "233";
} 
var obj2 = {
  teste233
}
console.log(obj2.teste233());

var obj3 = {
  teste233(){return "233";}
}
console.log(obj3.teste233());

var prop45 = "teste";
var obj4 = {
  [prop45 + "concat"]:"valor"
}
console.log(obj4.testeconcat);












