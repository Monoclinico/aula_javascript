function currying(a){
  return function(b){
    return a+b;
  }

}

const soma3 = currying(3);

console.log(soma3(1));
console.log(soma3(2));
console.log(soma3(5));
console.log(soma3(7));





