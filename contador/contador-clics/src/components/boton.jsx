import React from "react";
import "../styles/boton.css";
//el text se recibe como argumento 
function Boton({ text, tBoton, manejarClic }){

    return (
        <button
            className={ tBoton ? "boton-clic" : "boton-reiniciar" }
            onClick={manejarClic}
        >
            {text}
        </button>

    )

}

export default Boton;
/*
esta sintaxis es equivalente a la de desectructuracion

function Boton(props){

    return (
        <button>
            {props.text}
        </button>

    )

}

*/