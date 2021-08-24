// Arquivo index.js
import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;


import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

store.subscribe(() => {
  console.log(store.getState());
});
