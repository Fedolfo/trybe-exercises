// Component Greeting
import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting; // exporta pra ser usado em outro index.jsx

/* Simulação do react */
// Sendo chamado para App.js e renderizar na pagina ou console.log()
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;