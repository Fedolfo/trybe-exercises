const statesBrazil = [
"Acre",
"Alagoas" ,
"Amazonas",
"Amapá",
"Bahia",
"Ceará",
"Distrito Federal",
"Espírito Santo",
"Goiás",
"Maranhão",
"Minas Gerais",
"Mato Grosso do Sul",
"Mato Grosso",
"Pará",
"Paraíba",
"Pernambuco",
"Piauí",
"Paraná",
"Rio de Janeiro",
"Rio Grande do Norte",
"Rondônia",
"Roraima",
"Rio Grande do Sul",
"Santa Catarina",
"Sergipe",
"São Paulo",
"Tocantins",
];

function repetidorDeOption() {
  const estados = document.getElementById("state-of-brazil")
  for (const state in statesBrazil) {
  const options = document.createElement("option");
  options.innerHTML = statesBrazil[state].toUpperCase();
  estados.appendChild(options);
  }
}
repetidorDeOption()


let picker = new Pikaday({
  field: document.getElementById('dateInicio'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});



const pageForm = document.querySelector("form")
pageForm.addEventListener('submit', pageForms)

function pageForms(call1, call2) {
 return  validaName(call1), validaCpf(call2)
}

function validaName(e) {
  let nome = document.getElementById("name")

  if (nome.value.length >= 5) {
   
  } else if (nome !== 5) {
    let nomeAlert = document.getElementById("alertNome")
    nomeAlert.style.display = "block";
    e.preventDefault();
    nome.focus()
    console.log("ok");
  }
  return 
}

function validaCpf(i) {
  let cpf = document.getElementById("cpf-register");

  if (cpf.value.length >=11 && cpf.value.length <=11) {
        i.preventDefault();
        cpf.focus()
  } else if (cpf !== 11) {
    console.log("valida");
    let cpfAlert = document.getElementById("cpf")
    cpfAlert.style.display = "block";
      
  }
  return 
}

    // function alerts() {
//   let nome = document.getElementById("alertNome")
//   nome.style.display = "block"
// }






// //Verifica se o campo name foi preenchido e
  //   //contém no mínimo três caracteres.
  //   if(frm.name.value == "" || frm.name.value == null || frm.name.value.lenght < 3) {
  //     //É mostrado um alerta, caso o campo esteja vazio.
  //     alert("Por favor, indique o seu name.");
  //     //Foi definido um focus no campo.
  //     frm.name.focus();
  //     //o form não é enviado.
  //     return false;
   //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
//    if(frm.email.value.indexOf("@") == -1 ||
//    frm.email.indexOf(".") == -1 ||
//    frm.email.value == "" ||
//    frm.email.value == null) {
//      alert("Por favor, indique um e-mail válido.");
//      frm.email.focus();
//      return false;
//  }
//  //radio buttons: apartamento ou casa;
//  escolhaHome = -1;
//  //valor negativo default (padrão) que significa que nada foi escolhido ainda.
//     //No bloco de código abaixo foi criado um ciclo entre
//     //os radios button com o mesmo name (home)
//     for(x = frm.home.lenght -1; x > -1; x--) {
//          /*
//         x = frm.home.lenght -1 é a mesma coisa que: x = 2-
//         1, que resulta em 1.
//         x > -1 significa que o valor de x não pode ser igual a -1 e
//         sim maior, porque -1 significa que nada foi escolhido.
//         x-- significa que há um decremento no valor x, é algo como:
//         x = 1, x= 0 e pára pois x não pode ser -1.
//         */
//         if(frm.home[x].checked) { //checked quer dizer selecionado,
//           //então verifica se o primeiro (0) ou o
//           //segundo (1) radio button foi selecionado (checked).
//           escolhaHome = x; //atribui à variável escolhaHome o valor X.
//        }
//    }
//    //se nenhuma das opções (casa ou apartamento) forem
//    //escolhidas, mostra um alerta e cancela o envio.
//    if(escolhaHome == -1) {
//        alert("Prencher residência");
//        frm.home[0].focus();
//        return false;
//    }
//     //Valida a textArea, que é como validar um campo de texto simples.
//     if(frm.description_cargo.value == "" || frm.description_cargo.value == null) {
//       alert("Por favor, conte-nos um pouco do cargo");
//       frm.description_cargo.focus();
//       return false;
//   }
// }


