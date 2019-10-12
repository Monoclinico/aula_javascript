
hoisting();

function hoisting(){
  console.log(texto);
  var texto = "hoisting";
  console.log(texto);

}


/*
Saida:
undefined
hoisting
*/