//Symbols e Iterators

/*Tipos e objetos iteráveis possuem:
Um método responsável por gerar o seu iterador, sendo acessível pela chave Symbol.iterator.*/

//Symbol criar um indentificador único

var uniqueId = Symbol();
console.log(uniqueId);

var uniqueId2 = Symbol('Hello');
console.log(uniqueId2);


var lista = [5,4,3,7,1,2];

for (var x of lista){
  //retorna os valores
  console.log(x);
}
for (var x in lista){
  //retorna os indices
  console.log(x);
}




//Generators

function* returnABC(){
  
  yield "A";
  
  yield "B";
  
  let value = yield "C";

  yield "D"+value;
}

let abc = returnABC();

console.log(abc.next());
console.log(abc.next());
console.log(abc.next());
console.log(abc.next("E"));


function* naturalNumbers(){
  let number = 0;
  while(true){
    yield number;
    number++;
  }
}

let numbers = naturalNumbers();
let [zero, one, two, three] = [numbers.next().value, numbers.next().value, numbers.next().value, numbers.next().value];  
console.log(zero);
console.log(one);
console.log(two);
console.log(three);




























