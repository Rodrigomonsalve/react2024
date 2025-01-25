import {createStore} from "redux";
import reducer from "../reducers";



//ESTO ES EL NUCELO DE LA APLICACION. EN store SE GUARDA TODO EL ESTADO DE LA APLICACION. ES UN OBJETO QUE ES CONFORMADO POR LAS PROPIEDADES QUE SE VAYAN CREANDO EN EL ARCHIVO reducers/index.js. EN NUESTRO CASO SERÍA {contador:9} EL VALOR 9 ES EL ESTADO QUE VA CAMBIANDO.
const store=createStore(reducer);  /////PASO 5////// /////DE AQUI SE VA AL COMPONENTE/////////

store.subscribe(()=>console.log("Esto es el valor de una propiedad del store "+store.getState().contador));

export default store;