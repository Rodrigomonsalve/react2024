import React,{Component} from 'react';

//RENDERIZAR ES IMPRIMIR EN PANTALLA DE FORMA DINAMICA, UN SÓLO COMPONENTE

export default class RenderizadoDeElementos extends Component{

    constructor(){
        super();
        this.state={ 
            seasons:["Primavera", "Verano", "Otoño", "Invierno"]
        }

    }

    render(){
        return(
            <>
            <h1>Renderizado de Elemento</h1>          
            <h3>Estaciones del año:</h3>
            <ol>
                {
                    /*this.state.seasons.map(el=>(
                        <li>{el}</li>
                    ))*/

                    this.state.seasons.map((el,index)=>(      //CON ESTA ESTRUCTURA ESTAMOS RENDERIZANDO LOS ELEMENTOS DE UN ARREGLO
                        <li key={index}>{el}</li>
                    ))
                }
            </ol>
            </>
        )
    }
}