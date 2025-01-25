import React, { useReducer } from 'react'
import { TYPES } from '../actions/contadorActions';
import { contadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer';


//EN ESTE ARCHIVO ESTAMOS VIENDO EL USO DEL HOOK useReducer, PERO YA CON LA ESTRUCURA DE CARPETAS RECOMENDADA. PARA UN MEJOR ENTENDIMIENTO DEL HOOK, VER EL COMPONENTE Contador.

export const ContadorMejorado = () => {

    const [state,dispatch]=useReducer(contadorReducer, contadorInitialState, contadorInit); 

    const sumar=()=>{
        dispatch({type:TYPES.INCREMENT});
    }

    const restar=()=>{
        dispatch({type:TYPES.DECREMENT});
    } 

    const sumar5=()=>{
        dispatch({type:TYPES.INCREMENT5, payload:5});
    }

    const restar5=()=>{
        dispatch({type:TYPES.DECREMENT5, payload:5});
    }

    return(
        <div>
            <h2>Contador con Reducer y estructura de carpetas:</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={sumar5}>+5</button>
            <button onClick={restar5}>-5</button>
            <h3>{state.contador}</h3>
        </div>
    )
}

