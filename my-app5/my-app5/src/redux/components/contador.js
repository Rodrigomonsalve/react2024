import React from 'react'
import { restar, restar5, sumar, sumar5 } from '../actions/contadorActions'
import { useDispatch, useSelector } from 'react-redux'

export const ContadorRedux = () => {
                                        ////PASO 6///// 
    const state=useSelector((state)=>{return state});//EL HOOK useSelector PERMITE EXTRAER DATOS DEL ESTADO GLOBAL DE REDUX. TODO EL ESTADO GLOBAL DE REDUX SE ESTÁ GUARDANDO EN LA VARIABLE state. EN ESTE CASO, RECIBE UNA FUNCION QUE RECIBE EL ESATDO GLOBAL Y SIMPLEMENTE LO DEVUELVE. useSelector EXTRAE DE FORMA AUTOMATICA EL ESTADO GLOBAL DESDE EL Store. SE EXTRAE SÓLO PARA VERLO REFLEJADO EN LA INTERFAZ.
    const dispatch=useDispatch();

  return (
    <div>
        <h2>Contador con Redux</h2>
        <nav>
        <button onClick={()=>dispatch(sumar())}>+</button>  {/******* PASO 1 *********/}{/**DE AQUI SE VA A LAS FUNCIONES(ACTIONS)*/}
        <button onClick={()=>dispatch(restar())}>-</button>
        <button onClick={()=>dispatch(sumar5())}>+5</button>
        <button onClick={()=>dispatch(restar5())}>-5</button>
        </nav>
        <h3>{state.contador}</h3>{/******* PASO 7 *********/}{/**FIN */}
    </div>
  )
}
