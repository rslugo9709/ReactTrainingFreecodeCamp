import './App.css';
import Boton from "./components/botones/botones.jsx"
import Pantalla from './components/pantalla/pantalla.jsx';
import BotonClear from './components/clearbtn/clearbtn.jsx';
import Operador from './components/operadores/operador.jsx';

//importamos el hook

import { useState } from 'react';


//importamos una libreria de logica matematica
//Para usar esta libreria se debe hacer en la terminal npm i mathjs
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState(""); //importamos el hook

  const agregarInput = val => {
    setInput(input + val);
  };

  const limpiarPantalla = () =>{
    setInput("");
  }

  const mostrarResultado = () =>{

    setInput(evaluate(input))
  }

  return (
    <div className="App">

      
      <div className='contenedor-calculadora'>
        <Pantalla input={input} /> 
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Operador manejarClic={agregarInput}>+</Operador>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Operador manejarClic={agregarInput}>-</Operador>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Operador manejarClic={agregarInput}>*</Operador>
        </div>
        <div className="fila">
          <Boton manejarClic={mostrarResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Operador manejarClic={agregarInput}>/</Operador>
        </div>
        <div className="fila">
          <BotonClear manejarClic={limpiarPantalla}> Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
