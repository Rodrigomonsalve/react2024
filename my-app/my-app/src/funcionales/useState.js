import React,{ useState } from 'react';

export default function UsoDeUseState(props) {

    const [contador,setContador]=useState(0); //Esto es un hook. useState es una funcion que devuelve un arreglo que, a su vez, recibe una variable y una funcion que afecta a esa variable.En este caso estamos destructurandola
                                                //YA NO USAMOS EL PROPERTY INITIALIZAZER, NI CONSTRUCTOR NI LA FUNCION SETSTATE.
    const sumar=()=>{setContador(contador+1)};
    const restar=()=>{setContador(contador-1)};
    //TAMBIÉN PUEDE RECIBIR COMO PARÁMETRO UNA "FUNCION ACTUALIZADORA".TENDRÍA EL SIGUIENTE FORMATO:
    //const sumar=()=>{setContador((contador)=>contador+1)};
    //EQUIVALE A: setEstado((estadoActual)=>NuevoEstado);


    return(
        <>
        <h1>Uso de useState:</h1>
        <h3>Contador de {props.titulo}</h3>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button><button onClick={restar}>-</button>
        </>

    )
    
}

UsoDeUseState.defaultProps={
    titulo:"Clicks"
}