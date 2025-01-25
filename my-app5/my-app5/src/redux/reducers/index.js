import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";

const reducer=combineReducers({     /////PASO 4//// ///DE AQUI SE VA AL store/index.js
    contador:contadorReducer      //ESTAMOS DICIENDO QUE EL ESTADO RESULTANTE DE contadorReducer SE ALMACENARÁ EN EL ATRIBUTO contador. ES LA PROPIEDAD QUE USAREMOS EN CUALQUIER PARTE DE LA APLICACIÓN PARA ACCEDER AL ESTADO ACTUAL. POR CADA REDUCER, DEBEREMOS CREAR UNA NUEVA PROPIEDAD.
});

export default reducer;