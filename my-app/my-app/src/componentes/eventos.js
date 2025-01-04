import React,{Component} from 'react';


export default class Eventos extends Component{

    constructor(){
        super();
        this.state={
            contador:0
        }

        this.sumar=this.sumar.bind(this); // SE ESTÁ CREANDO UNA NUEVA FUNCIÓN sumar (this.sumar), QUE HACE REFERENCIA A LA FUNCION GLOBAL sumar (this.sumar.bind(this).
       
    }


    sumar() {
        this.setState({
            contador:this.state.contador+1
        })
    }
    
    restar() {
        this.setState({
            contador:this.state.contador-1
        })
        
    }


    render(){

        return(
            <>
            <h1>Eventos de clase</h1>
            <nav>
                {/**ESTOS SON LOS EVENTOS. LOS EVENTOS como onClick SÓLO FUCIONAN CON ETIQUETAS JSX, NO CON ETIQUETAS COMPONENTES(las que nosotros creemos). ESTO SE VE EN eventosPersonalizados.js */}
                <button onClick={this.sumar}>+</button> {/**HAY QUE RECORDAR QUE LOS MANEJADORES DE EVENTOS HACEN PERDER EL CONTEXTO. SI SOLO SE EJECUTA sumar NO ENCONTRARÍA LA FUCIÓN. ENTONCES this.sumar HACE REFERENCIA AL this.sumar DEL CONSTRUCTOR EN DONDE sumar SE ANCLA A ESTE COMPONENTE */}
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
            
            </>
        )

    }

    

}