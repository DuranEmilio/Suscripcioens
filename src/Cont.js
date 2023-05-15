import React, { useState } from 'react';

function Count() {
  const [numero, setNumero] = useState(0);

  const incrementarNumero = () => {
    setNumero(numero + 1);
  };

  return (
    <div className='column center'>
      <div onClick={incrementarNumero} className='contador row'>{numero}</div>
      <div className='subtitle'>Numero de Suscripcion</div>
    </div>
  );
}

export default Count;
