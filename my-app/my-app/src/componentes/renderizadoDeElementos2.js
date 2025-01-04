import { Component } from "react";
import data from "../ayudas/data.json";

//AQUI ESTAMOS RENDERIZANDO ELEMENTOS DE UN ARCHIVO JSON
//RENDERIZAR ES IMPRIMIR EN PANTALLA DE FORMA DINAMICA, UN SÓLO COMPONENTE

function ElementoDeLista(props) {
    return(
        <li>
            <h2>{props.el.name}</h2>
        </li>
    )
    
}

export default class RenderizadoDeElementos2 extends Component{

    render(){
        return(
            <>
            <h3>Renderizado de elementos json:</h3>            
            <ul>
                {
                    data.frameworks.map(el=><ElementoDeLista el={el}></ElementoDeLista>)
                }
            </ul>
            </>
        )
    }
        
    
    


}