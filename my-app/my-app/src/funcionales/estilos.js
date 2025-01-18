import React from "react";
import "./estilos.css";
//import "./estilos.scss"; los 
import moduleStyles from "./estilos.module.css";



//AQUI VEMOS SOLAMENTE LAS DIFERENTES FORMAS DE COLOCAR ESTILOS.
export default function Estilos(params) {

    let myStyle={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }

    return(
        <section className="estilos">
        <h1>Estilos en React:</h1> 
        <h3 className="bg-react">Estilos de hoja externa</h3> {/**Solamente invocamos los clases creadas en el archivo css externo*/}
        <h3 className="bg-react" style={{borderRadius:".25rem",margin:"1rem"}}>Estilos en linea</h3>{/**Aqui estamos combinando hoja de estilos externo y los estilos que creamos directamente en la etiqueta */}
        <h3 className="bg-react" style={myStyle}>Estilos declarados</h3>
        <h3 className="bg-react" style={myStyle}>@import-normalize</h3>
        <h3 className={moduleStyles.error} style={myStyle}>Estilos mediante modulos</h3>{/**Mediante modulos, tú creas tu archivo css(siempre con la expresión .module en el nombre) y aquí en la etiqueta tu escoges la clase css mediante notación de punto  */}
        <h3 className={moduleStyles.success} style={myStyle}>Estilos mediante modulos</h3>
       {/* <h3 className="bg-sass">Estilos mediante sass</h3>*/}
        </section>
    )


    
}