import React,{useEffect,useState} from 'react';
import { useFetch } from '../hooks/useFetch';


//UN HOOK PERSONALIZADO ES UNA FUNCION QUE PERMITE MODULARIZAR EL CÒDIGO EN REACT, COMO CUALQUIER OTRA FUNCION, ES DECIR, PERMITE REUTILIZAR EL CÓDIGO DE UN CUSTOM HOOK LAS VECES QUE QUERAMOS.
//SIN EMBARGO, TIENE LAS SIGUIENTES DIFERENCIAS CON UNA FUNCION REGULAR: SÓLO PUEDE SER USADO EN COMPONENTES FUNCIONALES, DEBE INVOCARSE  DE FORMA GLOBAL(NO DENTRO DE BUCLES), PUEDE USAR OTROS HOOKS, SU NOMBRE DEBE COMENZAR CON "use...".
export default function CustomHook(params) {
        
        let url="https://pokeapi.co/api/v2/pokemon";

        const {error, data,pending} =useFetch(url); //AQUI ESTAMOS EJECUTANDO UN HOOK PERSONALIZADO. PODEMOS DEVOLVER LOS VALORES QUE QUERAMOS DESDE EL CUSTOM HOOK
        console.log({error});
        console.log({data});
    
    return(

        <>
        <h3>Ejmplo de hook personalizado:</h3>
        <h1>{JSON.stringify(error)}</h1>    {/*JSON.stringify convierte un objeto o valor a una cadena json*/}
        <h1>{JSON.stringify(pending)}</h1>
        <h1>{JSON.stringify(data)}</h1>
        {/*<h1>{error}</h1>*/}
        </>

    )
        
    
}