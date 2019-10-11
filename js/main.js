let titulo = document.getElementsByTagName("h1");



function validaIdade(){
  let maior_de_idade;
  let idade = document.getElementsByTagName("input")[0].value;
  if((idade.length >0) && (isFinite(idade.valueOf()))){
    maior_de_idade = idade>=18?"Você tem mais de 18":"Você não tem mais de 18";
    titulo[1].innerHTML = idade>0? maior_de_idade:"Idade Inválida";
  }else{
    titulo[1].innerHTML = "Idade Inválida";
  }
}

function esconder(obj,e){
  if (e){
    obj.style.visibility = "hidden";
  }else{
    obj.style.visibility = "visible";
  }
}

function redirecionar(){
  window.open("file:///g:/Users/user/Documents/Matheus/FATEC/Cursos/GFT/aula_javascript/index.html");
  window.location.href = "file:///g:/Users/user/Documents/Matheus/FATEC/Cursos/GFT/aula_javascript/index.html";

}