import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

//La siguiente es la url ejemplo, con la que trabajeremos:
//http://localhost:3000/productos?inicio=1&fin=20
//  /productos es la ruta que creamos en el Route
//Este ejemplo funciona como paginacion que podria ser util en un ecommerce.
const Productos = () => {
    const LIMIT=20;

let{search}=useLocation(); //EN EL ATRIBUTO seacrh DEL HOOK useLocation SE GUARDA EL PARAMETRO DE CONSULTA: ?inicio=1&fin=20


let query=new URLSearchParams(search);
//AQUI SE ESTABLECEN LOS PARAMETROS DE CONSULTA. LAS SIGUIENTES LINEAS SIGNIFICAN QUE, EN CASO DE VISITAR, POR EJEMPLO, /productos, el parametro "inicio" será 1 y "fin" 20.
let start=parseInt(query.get("inicio")) || 1;
let end=parseInt(query.get("fin")) || LIMIT;

//EL SIGUIENTE ES OTRO HOOK, QUE SIRVE PARA ESTABLCER LOS PARAMETROS DE CONSULTA DE FORMA DINAMICA:
let history=useHistory(); 

//Se hace uso del atributo history del hook useHistory:
const handlePrev=(e)=>{
    history.push({search:`?inicio=${start-LIMIT}&fin=${end-LIMIT}`});
};

const handleNext=(e)=>{
    history.push({search:`?inicio=${start+LIMIT}&fin=${end+LIMIT}`});
};

  return (
    <div>
        <h3>Productos</h3>
        {/* <p>Mostrando productos del<b>1</b>al<b>20</b></p> */}
        <p>Mostrando productos del<b>{start}</b>al<b>{end}</b></p>
        {start > LIMIT &&  <button onClick={handlePrev}>Atrás</button>}  {/**RENDERIZADO CONDICIONAL PARA EVITAR MOSTRAR EL BOTON "ATRAS" DESDE EL PRINCIPIO, Y ASÍ EVITAR MOSTRAR NUMEROS NEGATIVOS   */}
        <button onClick={handleNext}>Adelante</button>
    </div>
  )
}

export default Productos;
