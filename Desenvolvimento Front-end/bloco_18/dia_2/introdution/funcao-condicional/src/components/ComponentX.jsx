import React, { useContext } from 'react';
import AppContext from '../Context/Mycontext';

const ComponenteX = () => {
  const { stateA, setStateB, stateB, setStateA } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateB(1 + 1 * 4)}>Click</button>
      <button onClick={() => setStateA("A SETADO")}>Click</button>
    </div>
  );
};

export default ComponenteX;