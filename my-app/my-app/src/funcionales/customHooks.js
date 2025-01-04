import React,{useEffect,useState} from 'react';
import { useFetch } from '../hooks/useFetch';

export default function CustomHook(params) {
        
        let url="https://pokeapi.co/api/v2/pokemon";

        const {error, data,pending} =useFetch(url); //AQUI ESTAMOS EJECUTANDO UN HOOK PERSONALIZADO. PODEMOS DEVOLVER LOS VALORES QUE QUERAMOS DESDE EL CUSTOM HOOK
        console.log({error});
        console.log({data});
    
    return(

        <>
        <h3>Ejmplo de hook personalizado:</h3>
        <h1>{JSON.stringify(error)}</h1>
        <h1>{JSON.stringify(pending)}</h1>
        <h1>{JSON.stringify(data)}</h1>
        <h1>{error}</h1>
        </>

    )
        
    
}