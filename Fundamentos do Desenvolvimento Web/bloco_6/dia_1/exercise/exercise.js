const statesBrazil = [
"",
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

const myform = document.querySelector(".myform")

new window.JustValidate('.js-form');

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      
    },
    radio: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength:11
    },
    address: {
      required: true
    },
    city: {
      required: true
    },
    state: {
      required: true
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    date: {
      required: true
    },
    resumo_curriculo: {
      required: true,
      maxLength: 500
    },
    description_cargo: {
      required: true,
      maxLength: 1000
    }
  },
  messages: {
    name: 'Coloque o seu nome',

    email: 'Registre o e-mail',
    
    cpf: 'Digite o seu CPF',

    address: 'Digite o seu endereço',

    city: 'Digite a sua cidade',

    state: 'Seleciona o seu Estado',
    
    radio: 'Selecione uma dessas opções',

    cargo: 'Coloque o seu cargo',

    date:  'Registre a sua data de inicio',

    resumo_curriculo: 'Obrigatório',

    description_cargo: 'Obrigatório'
  },

  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
    ajax({
        url: 'https://just-validate-api.herokuapp.com/submit',
        method: 'GET',
        data: values,
        async: true,
        callback: function (response) {
            alert('AJAX submit successful! \nResponse from server:' + response)
            myform.submit()
          },
        error: function (response) {
            alert('AJAX submit error! \nResponse from server:' + response)
        }
    });
},

invalidFormCallback: function (errors) {
    console.log(errors);
},
});










































// const pageForm = document.querySelector("form")
// pageForm.addEventListener('submit', pageForms)

// function pageForms(event) {
//   event.preventDefault()
//   validaName()
//   validaCpf()
// }

// function validaName() {
//   let nome = document.getElementById("name")

//   if (nome.value.length >= 5) {
//     console.log("if1")
//   } else {
//     let nomeAlert = document.getElementById("alertNome")
//     nomeAlert.style.display = "block";
//     nome.focus()
//     console.log("ok");
//   }
// }

// function validaCpf(i) {
//   let cpf = document.getElementById("cpf-register");

//   if (cpf.value.length == 11) {
//         console.log("if2")
//   } else {
//     console.log("valida");
//     let cpfAlert = document.getElementById("cpf")
//     cpfAlert.style.display = "block";
//   }
// }

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


