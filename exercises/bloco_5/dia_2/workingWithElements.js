/*1-Acesse o elemento elementoOndeVoceEsta .
2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4Acesse o primeiroFilho a partir de pai .
5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
8-Agora acesse o terceiroFilho a partir de pai .*/


// document.querySelector("#elementoOndeVoceEsta")//1

// document.querySelector("#elementoOndeVoceEsta").previousElementSibling.innerText ="Sou o primeiro filho do filho" //acessei o elementoOndeVoceEsta e usei o previousElementSibling, para colocar um texto na div e aparecer na pagina.

// document.querySelector("#elementoOndeVoceEsta").parentNode.style.color="red"//color red em pai


// document.querySelector("#pai").firstElementChild
// //primeiroFilho
// document.querySelector("#elementoOndeVoceEsta").firstElementChild //primeiroFilhoDOFilho

// document.querySelector("#elementoOndeVoceEsta").nextSibling //atenção!

// document.querySelector("#elementoOndeVoceEsta").nextElementSibling//terceirofilho

// document.querySelector("#pai").childNodes[5]
// //terceiroFilho


// let orfaos = [
//   "Mario",
//   "Junio",
//   "José",
//   "Alice",
//   "André",
//   "Kerlon"
// ];


// let atribuidorDosNomes = document.querySelector(".elementoOndeVoceEsta")

// for(let index of orfaos) {
//  let listOrfaos = index;

//  let thePersons = document.createElement('li')
// thePersons.innerHTML = listOrfaos;

// atribuidorDosNomes.appendChild(thePersons)
// }



let frase =document.createElement("div")
frase.innerText= "rei da pisadinha"

document.querySelector(".elementoOndeVoceEsta").appendChild(frase)

// "document.getElementById('cars').firstElementChild.remove()"