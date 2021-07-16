const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let paragrafo = document.querySelector("p");


let getfontsize = (el) => {
  let size = window.getComputedStyle(el, null)
                   .getPropertyValue("font-size");
  return parseFloat(size);
}

increase.addEventListener('click', () => {
  paragrafo.style.fontSize = (getfontsize(paragrafo) + 1) + "px";
})

decrease.addEventListener('click', function () {
  paragrafo.style.fontSize = (getfontsize(paragrafo) - 1) + "px";
});


let cor = document.getElementById("color")
let cor1 = document.getElementById("color1")
let cor2 = document.getElementById("color2")
let cor3 = document.getElementById("color3")

cor.addEventListener('click', () => {
  let coresParagrafo = document.querySelector("p");
    coresParagrafo.style.color= "purple";
});

cor1.addEventListener('click', () => {
  let coresParagrafo = document.querySelector("p");
  coresParagrafo.style.color= "#30c959";
});

cor2.addEventListener('click', () => {
  let coresParagrafo = document.querySelector("p");
  coresParagrafo.style.color= "#333333";
});

// cor3.addEventListener('click', () => {
//   let coresParagrafo = document.querySelector("p");
//   coresParagrafo.style.color= "#b08f0b";
// });



const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}
