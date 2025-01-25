import React, { useCallback, useState } from 'react'
import ContadorHijo4 from './contadorHijo4';

//AQUI EJEMPLIFICAMOS EL USO DEL HOOK useCallback. PARA ENTENDER MEJOR, VER EJEMPLOS DESDE contador1.js
export const Contador4 = () => {

    const[contador,setContador]=useState(0);
    const [input, setInput]=useState("");

    //const sumar=()=>{setContador(contador+1)};
    const sumar=useCallback(() => {setContador(contador+1)},[contador]);
    
    //const restar=()=>{setContador(contador-1)};
    const restar=useCallback(() => {setContador(contador-1)},[contador]);

    const handleInput=(e)=>{setInput(e.target.value)}


  return (
    <div>
        <h2>Contador4</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        <input type="text" onChange={handleInput} value={input}></input>
        <ContadorHijo4 contador={contador} sumar={sumar} restar={restar}></ContadorHijo4>
    </div>
  )
}
