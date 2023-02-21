import React from "react";
import styles from "./botones.module.css"

//el props.children hereda la informacion que se pasa dentro de los tags del componente padre, es decir, cuando se usa en el APP.JS si se coloca <Boton> 1 </Boton> el 1 se pasa como props a los hijos. 
function Boton(props){


    return(
        <div className={`${styles.boton} boton-contenedor`} onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;