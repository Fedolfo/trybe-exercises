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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
//================================================================\\
function criacaoDosDias() {
  
  const ListaUl = document.getElementById("days");

for (const daysList in dezDaysList) {
  let listaLi = document.createElement("li");
  listaLi.innerHTML = dezDaysList[daysList]
  listaLi.classList.add("day");
  ListaUl.appendChild(listaLi);

  if (dezDaysList[daysList] === 24 || dezDaysList[daysList] === 31) {
    listaLi.className="holiday";
    listaLi.innerHTML = dezDaysList[daysList]
    ListaUl.appendChild(listaLi);
    } else if (dezDaysList[daysList] === 4 || dezDaysList[daysList] === 11) {
    listaLi.className = "friday";
    listaLi.innerHTML = dezDaysList[daysList]
    ListaUl.appendChild(listaLi);
    } else if (dezDaysList[daysList] === 18) {
    listaLi.className="friday";
    listaLi.innerHTML = dezDaysList[daysList]
    ListaUl.appendChild(listaLi);
    } else if (dezDaysList[daysList] === 25) {
      listaLi.className="friday holiday"
      listaLi.innerHTML = dezDaysList[daysList]
      ListaUl.appendChild(listaLi);
    }
  }
}

criacaoDosDias()
//================================================================\\
//exercício 2
let divHoliday = document.createElement("div");
  divHoliday.setAttribute("id", "btn-holiday");
let button = document.createElement("button");
  button.innerHTML = "Feriados"
  paiBody.appendChild(button);
  paiBody.appendChild(divHoliday);

let filhoDivHoliday = document.querySelector(".buttons-container");
  filhoDivHoliday.append(divHoliday)

let filhoButton = document.getElementById("btn-holiday");
  filhoButton.append(button)

// // //================================================================\\
// // //exercicio 3

let selecaoHoliday = document.getElementsByClassName("holiday")
  button.addEventListener('click', function () {
    for (let i = 0; i < selecaoHoliday.length; i += 1) {
      if(selecaoHoliday[i].style.backgroundColor === "yellow") {
        selecaoHoliday[i].style.backgroundColor = "rgb(238,238,238)";
      } else {
        selecaoHoliday[i].style.backgroundColor = "yellow"
      }
      
  }
});
//================================================================\\
//exercício 4

function friday(string) {

  let buttonSexta = document.createElement("button");
  buttonSexta.setAttribute("id", "btn-friday")
  filhoButton.appendChild(buttonSexta)
  buttonSexta.innerHTML= string
  
}
  friday("Sexta-feira!")
//================================================================\\
//exercício 5
const fridayDays = [4, 11, 18, 25]
const btnFriday = document.getElementById("btn-friday");
btnFriday.addEventListener("click", function(){
  const fridayName = document.getElementsByClassName("friday");
  for (let i = 0; i < fridayName.length; i++) {
    if (fridayName[i].innerHTML !== "Sextou!!") {
      fridayName[i].innerHTML = "Sextou!!";
    } else {
      fridayName[i].innerHTML = fridayDays[i]
    }
    
  }
})
//================================================================\\
//exercicio 6

function mouseOver(){
  let dia =document.getElementById("days");

  dia.addEventListener("mouseover", function(event){
    event.target.style.fontSize = "30px";
    event.target.style.fontHeigth = "600";
  })
}

function removeMouseOver(){
  let dia = document.getElementById("days");
  
  dia.addEventListener("mouseout", function(event){
    event.target.style.fontHeigth = "200";
    event.target.style.fontSize = "20px";
  })
}

mouseOver()
removeMouseOver()

//================================================================\\
//exercicio 7


function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

let comando = newTaskSpan("Fazer bolinho de chuva")

//================================================================\\
//exercicio 8
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();