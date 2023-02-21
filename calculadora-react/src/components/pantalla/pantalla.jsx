import React from "react";
import styles from "./pantalla.module.css"

const Pantalla = ({ input }) =>(
    <div className= {styles.input} >
        {input}
    </div>
);


export default Pantalla;