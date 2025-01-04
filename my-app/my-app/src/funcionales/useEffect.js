import React,{useState,useEffect} from 'react';

export default function UsoDeUseEffect(){

    const [scrollY, setScrollY]=useState(0);
    
    //USEEFFECT SIRVE PRINCIPALMENTE PARA MANIPULAR EL DOM, LLAMAR A APIS Y CONFIGURACIÓN DE LISTENERS
    //SU FINALIDAD ES EJECUTAR CÓDIGO EN LOS DIFERENTES CICLOS DE VIDA DEL COMPONENTE FUNCIONAL.

    //SE EJECUTA AUTOMÁTICAMENTE:
    //Siempre se ejecuta al mennos una vez. Fase de montaje.
    //1)Después de cada renderización. Si no se pasa el segundo valor(se omite) que ingresa por los parametros de useEffect.
    //2)Sólo una vez. Si se pasa un array vacío por el segundo valor que ingresa por los parametros de useEffect.
    //3)Cada que cambie el valor de la dependencia(es el segundo valor que ingresa por los parametros de useEffect:[scrollY])
    useEffect(                                                          //useEffect es otro hook. Es una funcion que recibe 2 parámetros:una función y una varible que ingresa a un arreglo([scrollY]). A este segundo valor se le llama dependencia. El segundo parámetro es opcional.
        ()=>{
            console.log("Moviendo scroll");
            const detectarScroll=()=>setScrollY(window.pageYOffset);        //COMPORTAMIENTO ESPECÍFICO DE ESTE EJEMPLO:
            window.addEventListener("scroll",detectarScroll);           //useEffect, AL EJECUTARSE POR PRIMERA VEZ, EN ESTE CASO EN ESPECIFICO, REGISTRA UN LISTNER (window.addEventListener("scroll",detectarScroll))  QUE YA ESTARÍA FUERA DEL useEffect. ESTA LINEA SIEMPRE SE EJECUTA AL REALIZAR UN SCROLL, LO QUE DESENCADENA LA EJECUCIÓN DE detectarScroll, LO QUE HACE QUE SE RENDERICE EL DOM.
 
            return()=>{window.removeEventListener("scroll",detectarScroll)  //ESTO ES LA FASE DE DESMONTAJE. SE CREA CON UN return(). SI NO SE PONE, EL COMPORTAMIENTO SIGUE SIENDO EL MISMO, PERO SE ACONSEJA CREARLO.
                    console.log("Fase de desmontaje")
            }
        },[scrollY]
    );

    return(
        <h1>Pixeles: {scrollY}</h1>
    )
}