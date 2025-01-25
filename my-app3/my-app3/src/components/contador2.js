import React, { useState } from 'react'
import ContadorHijo2 from './contadorHijo2';

export const Contador2 = () => {

    const[contador,setContador]=useState(0);
    const [input, setInput]=useState("");

    const sumar=()=>{setContador(contador+1)};
    const restar=()=>{setContador(contador-1)};

    const handleInput=(e)=>{setInput(e.target.value)}


  return (
    <div>
        <h2>Contador2</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        {/**EN ESTE CASO,  ContadorHijo2 SÓLO SE RE-RENDERIZA CUANDO SE MODIFICA EL PADRE(Contador) RESPECTO A LA VARIABLE DE ESTADO contador,PORQUE AHORA SÍ MODIFICA AL COMPONENTE HIJO MEDIANTE LAS PROPS.*/}
        {/**SIN EMBARGO, NO SE RE-RENDERIZA EL COMPONENTE HIJO SI SE RE-RENDERIZA EL PADRE POR CAMBIOS EN LA VARIABLE DE ESTADO input, PORQUE NO AFECTA AL HIJO. */}
        {/**LA EXCEPCION A LA REGLA DE LA LINEA ANTERIOR, SE PRESENTA SI A LAS PROPS DEL COMPONENTE HIJO TAMBIEN SE PASA ALGUNA FUNCION(LA QUE SEA) DEL COMPONENTE PADRE (<ContadorHijo2 contador={contador} suma={sumar}></ContadorHijo2>). PARA EVITAR TAMBIEN EL RE-RENDERIZADO DEL COMPONENTE HIJO EN ESTE CASO, HAY QUE MEMORIZAR AHORA LAS FUNCIONES QUE PASAN COMO PROPS AL COMPONENTE HIJO, MEDIANTE EL HOOK useCallback*/}
        <input type="text" onChange={handleInput} value={input}></input>
        <ContadorHijo2 contador={contador}></ContadorHijo2>
    </div>
  )
}
