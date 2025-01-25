import { DECREMENT, DECREMENT5, INCREMENT, INCREMENT5 } from "../types";

const contadorInitialState=9;

//CON REDUX SIEMPRE DEBEREMOS CREAR UN ESTADO INICIAL POR DEFAULT. NO PODEMOS PASAR A LA FUNCION REDUCTORA, EL state SOLO.
export default function contadorReducer(state=contadorInitialState, action){

    switch (action.type) {
        case INCREMENT:
            return state+1;   //////PASO 3////////  ///DE AQUI SE VA AL reducers/index.js.
        case DECREMENT:
            return state-1;                                     //EL RESULTADO DE ESTA FUNCION REDUCTORA, QUE SERÁ EL ESTADO ACTUAL, SE ESTARÁ VIENDO REFLEJADO EN EL ATRIBUTO CORRESPONDIENTE DEL reducers/index.js
        case INCREMENT5:
            return state + action.payload;
        case DECREMENT5:
            return state - action.payload;
        default:
            return state;
    }
}