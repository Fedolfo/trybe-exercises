import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState")}>Click</button>
    </div>
  );
};

export default ComponenteX;