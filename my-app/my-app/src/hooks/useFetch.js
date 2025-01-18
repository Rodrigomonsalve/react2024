import React,{useEffect,useState} from 'react';


//ESTO ES UN HOOK PERSONALIZADO.
//PARA QUE React RECONOZCA QUE ES UN HOOK, SU NOMBRE SIEMPRE DEBE EMPEZAR POR LA PALARA use...
//PODEMOS CREAR LO QUE NOSOTROS QUERAMOS COMO QUERAMOS.
// SIRVEN EN CASO QUE ESTEMOS REALIZANDO UNA MISMA FUNCIONALIDAD DE FORMA CONSTANTE Y REITERADA EN NUESTRO CÓDIGO.

export function useFetch(url) {

    const [error,setError]=useState(null);
    const [data, setData]=useState(null);
    const [pending, setPending]=useState(true);
    
   
    
     useEffect(()=>{
    
                let AsyncFunction=async (url) => {

                    try{

                        let res=await fetch(url);

                        if(!res.ok){
                            throw{
                                err:true,
                                status:res.status,
                                statusText:!res.statusText?"Ocurrió un error":res.statusText
                                
                            }
                        }
                        
                        let data=await res.json();

                        setError({err:false});
                        setData(data);
                        setPending(false);

                    }catch(err){
                            setError(err);
                            //setData(null);
                            setPending(true);

                    }
            }
            
            AsyncFunction(url); 
        }, [url])
    
    return{error,data,pending}; //ESTO ES A: 
    //return{error:error,data:data,pending:pending};  //ES LO MISMO QUE LA LINEA ANTERIOR
    
    
    
}