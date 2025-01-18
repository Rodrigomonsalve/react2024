import { useState,useEffect } from 'react';


export default function useFetch2(url) {

    const [data,setData]=useState("");
    const [error,setError]=useState(null);
    const [loading, setLoading]=useState(false);

    useEffect(
        ()=>{
            const abortController=new AbortController();
            const signal=abortController.signal;      // signal nos ayuda a saber si una operación ha sido CANCELADA o no. No si fue exitosa o no. En este caso es sobre el fetch.

            const fetchData=async()=>{
                setLoading(true);

                try{
                    const res=await fetch(url);

                    if(!res.ok){ 
                        let error=new Error("Error en la petición");
                        error.status=res.status || "00";                        //ESTAMOS CREANDO DE FORMA ARBITRARIA 2 PROPIEDADES EN EL OBJETO ERROR:status Y statusText
                        error.statusText=res.statusText || "Ocurrió un error";
                        setError("Error");
                        throw error;
                    }else{
                        const json=await res.json();                            //DE JSON LO PASAMOS A JS.

                        if(!signal.aborted){                                    //SI LA OPERACIÓN NO FUE CANCELADA...
                                setData(json);
                                setError(null);
                        }
                    }

                }catch(error){
                    if(!signal.aborted){
                        setData(null);
                        setError(error)
                    }

                }finally{
                    if(!signal.aborted){

                        setLoading(false);
                    }
                   

                } 

            }
            
            fetchData();


        },
        [url]
    );


    return {data,error,loading};
   
}