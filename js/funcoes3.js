function fn() {
  return 'Code here';
  
}
const arrowFn1 = () => "Code here";
const arrowFn2 = () => {
  return "Code here";
}
arrowFn2.prop = "posso criar propriedades";
console.log(arrowFn1());
console.log(arrowFn2.prop);
