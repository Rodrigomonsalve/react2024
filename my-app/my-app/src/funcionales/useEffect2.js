import React, {useEffect,useState} from 'react';


/*function Reloj(props) {
    return(

        
        <h3>{props.hora}</h3>
    
        
    )
    
}*/

function Reloj({hora}) { //ESTO ES DESTRUCTURACIÓN  DIRECTA Y FUNCIONA IGUAL QUE LA FUNCION ANTERIOR
    return(

        
        <h3>{hora}</h3>
    
        
    )
    
}

export default function UsoDeUseEffect2(props){

    const[hora,setHora]=useState(new Date().toLocaleTimeString());
    const [visible,setVisible]=useState(false);

    useEffect(
        ()=>{
           let temporizador; 
            if(visible){
                temporizador= setInterval(()=>{
                    setHora(new Date().toLocaleTimeString());
                }, 1000);
            }else{
                clearInterval(temporizador);   
                
            }
        
        }

    ,[visible])

    

    return(
        <>
       
        <h1>Otro uso de useEffect:</h1>
        {visible && <Reloj hora={hora}/>}        {/**RECORDAR OPERADOR DE CORTO CIRCUITO && */}
        <button onClick={()=>setVisible(true)}>Iniciar</button>{/**RECORDAR QUE UNA FUNCION INVOCADA DE ESTA FORMA, SIGNIFICA QUE NO SE ESTÁ LLAMANDO DE FORMA INMEDIATA, COMO SÍ LO HARÍA setVisible(); */}
        <button onClick={()=>setVisible(false)}>Detener</button>
        </>
        

    )
       

    
    
}