// arquivo onde a redux store é criada
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers'

const rootReducer = combineReducers({reducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;