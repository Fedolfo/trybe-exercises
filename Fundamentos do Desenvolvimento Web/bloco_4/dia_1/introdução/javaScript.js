const name = "Carolina";
const birthCity = "Vespasiano";

let birthYear = 2001;
birthYear = 2030;
console.log([name,birthCity,birthYear])

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
 firstName: 'Ana',
 lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = area

console.log(area)
console.log(perimetro)

let nota = 90;

if (nota >= 80 && nota < 100) {
  console.log("Parabéns, você foi aprovada(o)");
}
else if ( nota < 80 && nota >= 60) {
  console.log ("Você está na nossa lista de espera");
}
else {
  console.log("Você foi reprovada(o)");
}

let candidato = "aprovado"

switch (candidato) {
  case "aprovado":
    console.log("Parabéns você foi aprovada(o)");
    break;

  case "lista":
    console.log("Você está na lista de espera");
    break;

  case "reprovado":
    console.log("Você foi reprovado!");
    break;
  
  default:
    console.log("Não se aplica");
}















