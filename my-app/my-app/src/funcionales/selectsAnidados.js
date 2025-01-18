import React,{useState} from 'react';
import SelectList from './selectList';

export default function SelectsAnidados() {

    const [state,setState]=useState("");
    const [town,setTown]=useState("");
    const [suburb,setSuburb]=useState("");

    const TOKEN="b278156b-ff0e-45c7-ad08-e8380de2e03fi";//PARA SEGUIR PROBANDO, SOBRA LA ULTIMA "i". Quitala!

    return(
        <>
        <h2>Selects anidados:</h2>
        <h3>México</h3>
        <SelectList title="estado" 
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} 
        handleChange={(e)=>{
            setState(e.target.value);
            }}></SelectList>

        
       {state && <SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e)=>{setTown(e.target.value)}}></SelectList>}
       {town  && <SelectList title="colonia" url={`https:api.copomex.com/query/get_colonia_por_municipio/${town}/?token=${TOKEN}`} handleChange={(e)=>{setSuburb(e.target.value)}}></SelectList>}
        <pre>
            {state} - {town} - {suburb}
        </pre>
        </>
    )
    
}