import React, { useState } from 'react';
import Plussub from './Plussub';
import Premiumsub from './Premium';
import Count from './Cont';

function App() {
  const [mostrarModulos, setMostrarModulos] = useState(false);

  const toggleModulos = () => {
    setMostrarModulos(!mostrarModulos);
  };

  return (
    <div>
      <div className='header row'>Nueva Suscripcion!!
        <Count></Count>
        <button onClick={toggleModulos} className='button'>type</button>
      </div>
      {mostrarModulos ? (
        <div>
          <Plussub />
        </div>
      ) : (
        <div>
          <Premiumsub />
        </div>
      )}
    </div>
  );
}

export default App;


