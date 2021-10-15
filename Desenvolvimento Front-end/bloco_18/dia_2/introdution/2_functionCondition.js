import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0); // useState, o counter recebe o parametro 0
  // o setCounter seta um novo valor,onde vai atualizar o valor e jogar esse valor para counter.
  // React.Dispatch<React.SetStateAction<number>> o setCounter faz isso!
  return (
    <div>
      <div>Counter: {counter}</div>{ /*Counter 0 do useState inicialmente */}
      <button type="button" onClick={() => setCounter(counter + 1)}> 
      {/*a cada click setCounter seta um novo valor, onde o counter vai somar com mais um*/}
        Increase Counter
      </button>
    </div>
  );
}

export default App;