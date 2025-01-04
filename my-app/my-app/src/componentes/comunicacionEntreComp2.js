import React,{Component} from 'react';


//COMUNICACIÓN DE COMPONENTE HIJO A PADRE
//COMPONENTE PADRE ES EL QUE RENDERIZA A OTRO COMPONENTE(que sería, como consecuencia, el hijo).
//EN ESTE CASO, EL HIJO ES QUIEN SE ENCARGA DE MODIFICAR EL ESTADO DEL PADRE. NO ES COMO TAL UNA COMUNICACIÓN.
function Hijo(props) {

    return(
        <button onClick={props.incrementarContador}>+</button>
    
)
        
}



export default class ComunicacionEntreComponentesPadre2 extends Component{

        state={
            contador:0
        }

    incrementarContador=()=>{
        this.setState({contador:this.state.contador+1});
    }    

    render(){
        return(
            <>
            <h1>Comunicacion Entre Componentes 2:</h1>{/**En este caso el componente <Hijo> es el hijo, porque es renderizado por ComunicacionEntreComponentesPadre, quien le envia información al hijo. */}
            <Hijo incrementarContador={this.incrementarContador}></Hijo> {/**ES EL PADRE QUIEN LE PASA UNA FUNCION AL HIJO QUIEN LA EJECUTA PARA MODIFICAR EL ESTADO DEL PADDRE */}
            <h4>{this.state.contador}</h4>
            </>
        )
    }


}