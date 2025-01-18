import React,{Component} from 'react';

//UN EVENTO PERSONALIZADO, ES UNO QUE TÚ MISMO CREAS(miOnClick).
//EN ESTE CASO SE CREÓ PORQUE LOS EVENTOS DE REACT SÓLO SE ASOCIAN A ETIQUETAS YA EXISTENTES(<button>). EN NUESTRO CASO <Button> NOSOTROS LO CREAMOS, POR LO QUE NO PODEMOS USAR UN EVENTO DE REACT.
function Boton(props) {

    return(
        <button onClick={props.miOnClick}>Boton creado como componente</button>
    )
    
    
}


export default class EventosPersonalizados extends Component{

    handleClick=(e, mensaje)=>{   //AL EJECUTARSE EL EVENTO, ESTE PUEDE PASAR A LA FUNCION. EN ESTE CASO COMO e.
        //e.target es en realidad un objeto que tiene diversas propiedades: name, value, etc. Por lo tanto, sería posible destructurarlo.
        console.log(e);                     //SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
        console.log(e.target);              //<button>Boton creado como componente</button>
        console.log(e.target.value);        //SIRVE PARA FORMULARIOS    //value es el atributo value de la etiqueta. De esta forma, puedes acceder a los valores de las demas etiquetas(e.target.type, e.target.name,etc)
        console.log(e.target.textContent);  //Boton creado como componente
        console.log(e.nativeEvent);         //PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
        console.log(e.nativeEvent.target);  //<button>Boton creado como componente</button>
        console.log(mensaje);               //Pasando parametros

    }


    //LA CREACIÓN DEL EVENTO CONSISTE SÓLO EN PONERLO AQUÍ Y PASARLO COMO PROP AL COMPONENTE
    render(){
        return(
            <>
            <h2>Manejador de eventos:</h2>
            {/*<button onClick={(e)=>this.handleClick(e,"Pasando parametros")}> </button>*/}
            <Boton miOnClick={(e)=>this.handleClick(e,"Pasando parametros")}></Boton> {/**ESTA FORMA DE EJECUTAR EL EVENTO SIRVE POR SI QUIERES PASAR MAS PARAMETROS ADEMAS DEL EVENTO(e) */}
            <Boton miOnClick={this.handleClick}></Boton>{/**ESTA FORMA DE EJECUTAR EL EVENTO SIRVE PARA EJECUTAR LA FUNCION Y PASAR SOLO EL EVENTO(e)*/}
            </>
        )
    }
}