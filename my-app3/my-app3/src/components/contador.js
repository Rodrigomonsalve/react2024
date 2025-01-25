import React, { useState } from 'react'
import ContadorHijo from './contadorHijo';

export const Contador = () => {

    const[contador,setContador]=useState(0);
    const [input, setInput]=useState("");

    const sumar=()=>{setContador(contador+1)};
    const restar=()=>{setContador(contador-1)};

    const handleInput=(e)=>{setInput(e.target.value)}

//CON ESTE EJERCICIO SE PRACTICA MEMO. MEMO SIRVE PARA EVITAR EL RE-RENDERIZADO DE COMPONENTES.
//EN NUESTRO CASO, DADO QUE <ContadorHijo> ES EL COMPONENTE HIJO DEL COMPONENTE <Contador>, PORQUE SE ENCUENTRA DENTRO DE ÉL, CADA QUE SE RE-RENDERICE EL PADRE, EL COMPORTAMIENTO NORMAL SERÍA QUE TAMBEIN SE RE-RENDERICE EL HIJO.
//PARA EVITAR EL RE-RENDERIZADO DEL HIJO(MEMORIZACION DEL COMPONENTE), SE USA MEMO DESDE EL COMPONENTE RESPECTO AL CUAL QUEREMOS EVITAR SU RE-RENDERIZADO, EN ESTE CASO, ContadorHijo.
//DE ESTE MODO, AHORA, CADA QUE CAMBIE EL VALOR DE LA VARIABLE DE ESTADO contador, SÓLO SE RE-RENDERIZA EL COMPONENTE Contador.
//AL USAR MEMO, EL COMPONENTE CUYA RE-RENDERIZACION QUEREMOS EVITAR, SE VUELVE A RE-RENDERIZAR SÓLO CUANDO SUS PROPS CAMBIEN. PODRIAMOS HACER ALGO ASI(<ContadorHijo prop={contador}></ContadorHijo>)

//SE PUEDE USAR MEMO, SI EL COMPONENTE HIJO REALIZA PETICIONES FETCH, Y QUEREMOS EVITAR PETICIONES INNECESARIAS.
  return (
    <div>
        <h2>Contador</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        <input type="text" onChange={handleInput} value={input}></input>
        <ContadorHijo></ContadorHijo>
    </div>
  )
}
