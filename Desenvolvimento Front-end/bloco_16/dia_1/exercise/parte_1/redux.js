const NEXT_COLOR = "NEXT_COLOR";
const PREVIOUS_COLOR = "PREVIOUS_COLOR";
const RANDOM_COLOR = "RANDOM_COLOR";
// ========== ACTIONS ==============
const nextColor = () => ({
  type: NEXT_COLOR,
});

const previousColor = () => ({
  type: PREVIOUS_COLOR,
})

const randomColor = () => ({
  type: RANDOM_COLOR,
})

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

// ========== REDUCER ==============

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: ((state.index === state.colors.length) ? state.index = 0 : state.index += 1)
      };
      case PREVIOUS_COLOR:
        return {
          ...state,
          index: ((state.index === 0) ? state.index = state.colors.length : state.index -= 1)
      };
      case RANDOM_COLOR:
        return {
          ...state,
          colors: [...state.colors, criarCor()],
          index: state.colors.length
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
}

// ========== STORE ==============
const store = Redux.createStore(reducer)

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors[index]);
  document.getElementById('container').style.backgroundColor = colors[index];
  document.getElementById('value').innerHTML = colors[index];
});

  const nextButton = document.getElementById('next');
  nextButton.addEventListener('click', () => {
    store.dispatch(nextColor());
  })

  const previousButton = document.getElementById('previous');
  previousButton.addEventListener('click', () => {
    store.dispatch(previousColor());
  })

  const randomColorButton = document.getElementById('random');
  randomColorButton.addEventListener('click', () => {
    store.dispatch(randomColor());
  })
