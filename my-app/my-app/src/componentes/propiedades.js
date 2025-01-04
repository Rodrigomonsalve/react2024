import React,{Component} from 'react';

function ComponenteConPropiedades(props) { // EL OBJETO PROPS SIRVE PARA PASAR INFORMACIÓN DESDE LAS ETIQUETAS QUE AYUDAN A RENDERIZAR LOS COMPONENTES

    return(
    <>
    <li>{props.nombre}</li>
    <li>{props.edad}</li>
    </>
    );
    

}

export default ComponenteConPropiedades;