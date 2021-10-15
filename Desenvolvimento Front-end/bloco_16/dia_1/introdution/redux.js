const LOGIN = 'LOGIN';

const fazerLogin = (email) => ({
  type: LOGIN,
  email});

const USER_LOGIN = {
  login: false,
  email: "",
};

const reducer = (state = USER_LOGIN, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
