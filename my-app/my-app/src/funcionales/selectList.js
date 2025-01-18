import React from 'react';
import useFetch2 from '../hooks/useFetch2';

const SelectList=({title,url,handleChange})=>{


    const {data,error,loading}=useFetch2(url);
    
    console.log(data,error,loading);

    if(!data){                                  //ESTAS LINEAS SON IMPORTANTES: si al cargarse la pagina te da como error:  "Cannot read properties of undefined (reading 'estado')" 
       return null;
   }

    if(error){
        return "Error";
        {/*<Message msg={`Error${error.satatus}:${error.statusText}`}bgColor="#dc3545"></Message>*/}
    }

    
    let id=`select-${title}`;
    let label=title.charAt(0).toUpperCase()+title.slice(1);
    let options=data.response[title];           //ES LO MISMO QUE data.response.title. SIN EMBARGO, SI ALGUNA DE LAS PROPIEDADES ES DINAMICA(CAMBIA), SE USAN LOS CORCHETES.


    

    return(
        <>
            <label htmlFor={id}>{label}</label>
            {/*{loading && <Loader></Loader>}*/}
            <select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {data && options.map((el)=><option value={el}>{el}</option>)}
            </select>
        </>
    )


}

export default SelectList;
