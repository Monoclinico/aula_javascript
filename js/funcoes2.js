
var teste ="example";
(()=>{
  console.log(teste);
  if(true){
    console.log(teste);
  }
  console.log(teste);
})();

(()=>{
  let teste2 ="example2fora";
  console.log(teste2);
  if(true){
    let teste2 ="example2dentro";
    console.log(teste2);
  }
  console.log(teste2);
})();