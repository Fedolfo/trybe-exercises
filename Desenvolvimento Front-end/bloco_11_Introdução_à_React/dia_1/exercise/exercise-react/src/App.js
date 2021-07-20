import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Jogar New World', 'Comer algo', 'E Aprender react'];

class App extends React.Component {
  render () {
    return (
      <ul>{ compromissos.map((string)=> Task(string)) }</ul>
    );
  }
}

export default App;
