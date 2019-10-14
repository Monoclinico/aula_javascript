

// incremento e decremento
let x = 1;
let y = 1;

var a = ++x;
var b = y++;
console.log(a); //2
console.log(b); //1
console.log(x); //2
console.log(y); //2 

//polimorfismo da soma

// Número + Número -> adição
var ps1 = 1 + 2 // 3

// Booleano + Número -> adição
var ps2 = true + 1 // 2

// Booleano + Booleano -> adição
var ps3 = false + false // 0

// Número + String -> concatenação
var ps4 = 5 + "foo" // "5foo"

// String + Booleano -> concatenação
var ps5 = "foo" + false // "foofalse"

// String + String -> concatenação
var ps6 = "foo" + "bar" // "foobar"

//subtração
var s1 = 5 - 3 // 2
var s2 = 3 - 5 // -2
var s3 = "foo" - 3 // NaN

/*
Divisão:
1 / 2      // retorna 0.5 em JavaScript
1 / 2      // retorna 0 em Java 
// (nenhum dos números é explicitamente um número de ponto flutuante)

1.0 / 2.0  // retorna 0.5 em JavaScript e Java

2.0 / 0    // retorna Infinity em JavaScript
2.0 / 0.0  // retorna Infinity também
2.0 / -0.0 // retorna -Infinity em JavaScript


Potenciação:
-2 ** 2; 
// 4 no Bash, -4 em outras linguagens. 
// Isso é inválido no JavaScript, pois a operação é ambígua. 


-(2 ** 2); 
// -4 no JavaScript e a intenção do autor não é ambígua.

*/

//negação unária
var xu = 3;
var yu = -xu; // yu = -3, xu = 3

//soma unária
var su1 = +3 ;    // 3
var su2 = +"3"; // 3
var su3 = +true; // 1
var su4 = +false; // 0
var su5 = +null; // 0

/*
1    ==  1         // verdade
'1'  ==  1         // verdade
1    == '1'        // verdade
0    == false      // verdade
0    == null       // falso
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
object1 == object2 // falso
0    == undefined  // falso
null == undefined  // verdade

1 !=   2     // verdade
1 !=  '1'    // falso
1 !=  "1"    // falso
1 !=  true   // falso
0 !=  false  // falso
*/


