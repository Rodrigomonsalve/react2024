import React, { useReducer, useState } from 'react'


//EN ESTE ARCHIVO ESTAMOS VIENDO EL HOOK useReducer, PERO SIN LA ESTRUCTURA DE CARPETAS RECOMEDADA. TODO ESTA JUNTO EN UN SOLO ARCHIVO PARA MEJOR ENTENDIMIENTO.

const initialState={contador:0};
const init=(initialState)=>{
        return{
            contador:initialState.contador+100
        }
}

const TYPES={
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
    INCREMENT5:"INCREMENT5",
    DECREMENT5:"DECREMENT5",
    RESET:"RESET"
}


function reducer(state,action) {
    switch(action.type){
        case TYPES.INCREMENT:
            return {contador:state.contador+1}; //AQUI ESTOY ACTUALIZANDO EL OBJETO state
        case TYPES.DECREMENT:
            return {contador:state.contador-1};
        case TYPES.INCREMENT5:
            return {contador:state.contador+action.payload}
        case TYPES.DECREMENT5:
            return {contador:state.contador-action.payload}
        default:
            return state;
    }
    
}

export const Contador = () => {

    //const [count,setCount]=useState(0);

   /*  const sumar=()=>{
        setCount(count+1);
    }

    const restar=()=>{
        setCount(count-1);
    } 

    return (
    <div>
        <h2>Contador con Reducer</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <h3>{count}</h3>
    </div>
  ) */


    //EL HOOK useReducer SUSTITUYE AL HOOK useState. TIENEN EXACTAMENTE LA MISMA FUNCIONALIDAD.  SIN EMBARGO, useReducer SE RECOMIENDA USAR CUANDO LA APLICACION ES MAS COMPLEJA Y POR LO TANTO ES MANEJO DEL ESTADO TAMBIEN.
    
    const [state,dispatch]=useReducer(reducer,initialState, init);  //state ES EL ESTADO ACTUAL Y dispatch ES COMO LA FUNCION ACTUALIZADORA(setState) DE useState. LA DIEFERENCIA RADICA EN QUE useReducer YA RECIBE COMO PARAMETRO LA FUNCION ENCARGADA DE REALIZAR LAS TAREAS PRINCIPALES DEL COMPONENTE(sumar y restar).
                                                                    //init ES UNA FUNCION. ESE PARAMETRO ES OPCIONAL. SIRVE PARA HACERLE ALGO(LO QUE SEA) AL VALOR INICIAL (initialState)
    const sumar=()=>{
        dispatch({type:TYPES.INCREMENT});//AL dispatch INGRESA UN OBJETO QUE, EN ESTE CASO, SE LLAMA action
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
            <h2>Contador con Reducer:</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={sumar5}>+5</button>
            <button onClick={restar5}>-5</button>
            <h3>{state.contador}</h3>
        </div>
    )
}
