import React from "react";
import styles from "./clear.module.css"

const BotonClear = (props) =>(
    <div className= {styles.clear} onClick={() => props.manejarClic(props.children)}>
        {props.children}
    </div>
);


export default BotonClear;