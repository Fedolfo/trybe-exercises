function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const paiBody = document.body;

function criacaoDosDias() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ListaUl = document.getElementById("days")

for (const daysList of dezDaysList) {
  let listaLi = document.createElement("li")
  listaLi.innerHTML = dezDaysList[daysList]
  listaLi.classList.add("day")
  ListaUl.appendChild(listaLi)
  }
}
criacaoDosDias()
// Escreva seu código abaixo.