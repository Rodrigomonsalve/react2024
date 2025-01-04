import React,{Component} from 'react';

//UN MANEJADOR DE EVENTOS, ES SIMPLEMENTE LA FUNCION  QUE SE EJECUTA AL OCURRIR EL EVENTO(onClick).
export default class ManejadorDeEventos extends Component{

//ESTE ES EL MANEJADOR DE EVENTOS
    handleClick=(e, mensaje)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(mensaje);

    }


    render(){
        return(
            <>
            <h2>Manejador de eventos:</h2>
            {/*<button onClick={this.handleClick}> </button>*/}
            <button onClick={(e)=>this.handleClick(e,"Pasando parametros")}> Enviar</button> {/*LO UNICO DIFERENTE QUE ESTAMOS REALIZANDO EN ESTA LINEA ES PASAR POR PARAMETROS INFORMCIÓN AL MANEJADOR DE EVENTOS. e ES EL EVENTO  */}

            </>
        )
    }
}