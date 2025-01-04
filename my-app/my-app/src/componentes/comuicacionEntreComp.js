import React,{Component} from 'react';


//COMUNICACIÓN DE COMPONENTE PADRE A HIJO
//COMPONENTE PADRE ES EL QUE RENDERIZA A OTRO COMPONENTE(que sería, como consecuencia, el hijo).
function Hijo(props) {

    return(
    
    <h3>Mi nombre es {props.nombre}</h3>)
        
    



    
}

export default class ComunicacionEntreComponentesPadre extends Component{
    render(){
        return(
            <>
            <h1>Comunicacion Entre Componentes:</h1>{/**En este caso el componente <Hijo> es el hijo, porque es renderizado por ComunicacionEntreComponentesPadre, quien le envia información al hijo. */}
            <Hijo nombre="Rodrigo"></Hijo>
            </>
        )
    }


}