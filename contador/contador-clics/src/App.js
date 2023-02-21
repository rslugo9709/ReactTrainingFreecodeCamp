import React from 'react';
import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';
//importamos la imagen
import freecodecampLogo from "./imgs/freecodecamp-logo.png";

//importamos el hook
import { useState } from 'react';


function App() {
  //Usaremos hooks
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    //se usa el hook
    setNumClics(numClics + 1); //actualiza el estado

    console.log('Conectado');
  }

  const reiniciarContador = () =>{
    setNumClics(0);
    console.log('Reiniciando');
  }
  return (
    <div className="App">
      <div className='free-logo-contenedor'>
          <img 
          className='free-logo'
          src={freecodecampLogo}
          alt="Logo of free code camp"
          >
          </img>
      </div>

      <div className='contenedor-clicks'>  

      <Contador numClics={numClics}></Contador>

      < Boton text='Clic'
        tBoton={true}
        manejarClic={manejarClic}>
      </Boton>

      <Boton text='Reiniciar'
        tBoton={false}
        manejarClic={reiniciarContador} >
        </Boton>

      </div>




    </div>
  );
}

export default App;
