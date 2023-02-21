
//lo primero es importar el react

import React from "react";
import "../styles/cTestimonio.css";
//un punto indica que está en el mismo nivel de la carpeta
//dos puntos indica que debe salir una carpeta(subir un nivel)

//
export function Testimonios(props){ //un componente de react retorna un elemento jsx
  
    return (
        <div className="contenedor-testimonio">
            <img //en JSX para importar una imagen se debe usar codigo de JS en el src
            className="imagen-testimonio" 
            src={require(`../img/testimonio-${props.imagen}.png`)} 
            alt="foto de emma">  
            </img>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.nombre}</strong> at {props.pais} 
                </p>
                <p className="cargo-testimonio">
                    {props.cargo} at <strong>{props.empresa}</strong>
                </p>
                <p className="texto-testimonio">
                    "{props.testimonio}"
                </p>
            </div>
        </div>
    ); 

    //para que un componente se muestre en una aplicacion, la aplicacion(app.js) misma debe renderizar ese componente
}


//exportamos el componente

//exportacion por default
//export default Testimonios, solo exporta un componente;

//exportacion por nombre 
//arriba, exporta especificamente los componentes a usar.

//en react existen dos tipos de exportaciones: nombrada y por defecto, 




//para insertar codigo en JS se usan las llaves {}










