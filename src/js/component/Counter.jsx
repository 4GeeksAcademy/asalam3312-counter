
import React, { useEffect, useState } from 'react'
/* import './icons.js'; // arroja error al tratar de agregarlo */
import './counter.css';

const Counter = () => {

  const [seconds, setSeconds] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0]);

  useEffect(() => { //useEffect genera cambios en tiempo real dentro del sitio web de manera automatica, modificando así los usos de estado que encluimos dentro de las constantes anteriores
    const interval = setInterval(() => {
      const digitsArray = seconds.toString().padStart(4, '0').split(''); // digitsArray contiene seconds transformado en string, además un padStart el cual determina la cantidad de espacios que tendremos y con que los rellenaremos. tenemos también un split que nos va a separar cada valor en un string individual

      setDigits(digitsArray); // setDigits que es quien modifica a digits va a contener el valor de la constante digitsArray
      setSeconds((prevSeconds) => prevSeconds + 1); // haremos que setSeconds modifique a seconds haciendo así que en número contenido cambie

    }, 1000); //determinamos cada cuanto queremos que se ejecute este proceso

    return () => clearInterval(interval); // 
  }, [seconds]);

  return (
    <div>
      <p className='d-flex'>
        {/* <p><i class="far fa-clock" style="color: #ffffff;"></i></p> */}
        <p className='border border-color-ligh rounded d-flex d-flex align-items-center d-flex justify-content-center me-1 ms-1'>{digits[0]}</p>
        <p className='border border-color-ligh rounded d-flex d-flex align-items-center d-flex justify-content-center me-1 ms-1'>{digits[1]}</p>
        <p className='border border-color-ligh rounded d-flex d-flex align-items-center d-flex justify-content-center me-1 ms-1'>{digits[2]}</p>
        <p className='border border-color-ligh rounded d-flex d-flex align-items-center d-flex justify-content-center me-1 ms-1'>{digits[3]}</p>
      </p>
    </div>
  )
};

export default Counter