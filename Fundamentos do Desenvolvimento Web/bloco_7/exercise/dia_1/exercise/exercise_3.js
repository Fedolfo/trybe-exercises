let button = document.getElementById("clickme")
let span = document.getElementById("contador"),
  count = 0;
button.onclick = () => {
  count += 1;
  span.innerHTML = `Número: ${count}`
};
