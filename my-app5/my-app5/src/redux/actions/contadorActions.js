import { DECREMENT, DECREMENT5, INCREMENT, INCREMENT5 } from "../types";
                //INGRESA UN OBJETO DE TIPO "action":
export const sumar=()=>({type:INCREMENT});  /////PASO 2////// ///DE AQUI SE VA A LA FUNCION REDUCTORA
export const restar=()=>({type:DECREMENT});
export const sumar5=()=>({type:INCREMENT5, payload:5});
export const restar5=()=>({type:DECREMENT5, payload:5});
