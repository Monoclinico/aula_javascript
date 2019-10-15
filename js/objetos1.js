
//Herança e Classes
/*
baseada em protótipos 
prototype
__proto__
constructor
*/
const texto1 = String("Hello, world");
console.log(texto1.__proto__.toUpperCase); //[Function: toUpperCase]
console.log(String.prototype.toUpperCase === texto1.__proto__.toUpperCase); //true
console.log(texto1.constructor == String); // true
console.log(String.constructor);
console.log(Function.prototype.constructor);

const myText = 'I am married';
//myText.constructor -> String
//myText.__proto__ -> String.prototype


function Animal(){
  this.qtdepatas = 4;
}

let newBicho = new Animal();
console.log(newBicho.__proto__ === Animal.prototype);
console.log(newBicho instanceof Animal); 

//-------------------------

function Livro(paginas){
  this.paginas = paginas;
}

Livro.prototype.material = "papel";

function Gibi(titulo){
  Livro.call(this, 25);
  this.titulo = titulo;
}
Gibi.prototype = Object.create(Livro);
Gibi.prototype.desenhos = true;

let gibi1 = new Gibi('Super Homem');
let gibi2 = new Gibi('Super Joker');
console.log(gibi1.titulo); //supeer homem
console.log(gibi1.paginas); // 25
console.log(gibi2.desenhos);
console.log(gibi2.prototype.material);

//Modificadores de acesso
//Encapsulamento 
//Static













