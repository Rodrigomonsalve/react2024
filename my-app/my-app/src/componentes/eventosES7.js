import React,{Component} from 'react';


export default class EventosES7 extends Component{

  //A PARTIR DE ECMAScript7 YA NO ES NECESARIO USAR CONSTRUCTOR. A ESTO SE LE LLAMA PROPERTY INITIALIZER, PORQUE HEREDAN EL this DEL CONTEXTO EN EL QUE SE ENCUENTRAN (en este caso, la clase)
        state={
            contador:0
        }


        //YA NO ES NECESARIO USAR EL BINDING, PORQUE ESTAMOS USANDO FUNCIONES FLECHA(sumar,restar)
        //this.sumar=this.sumar.bind(this); // SE ESTÁ CREANDO UNA NUEVA FUNCIÓN sumar (this.sumar), QUE HACE REFERENCIA A LA FUNCION GLOBAL sumar (this.sumar.bind(this).
       
    


    sumar=()=> {
        this.setState({
            contador:this.state.contador+1
        })
    }
    
    restar=()=> {
        this.setState({
            contador:this.state.contador-1
        })
        
    }


    render(){

        return(
            <>
            <h1>Eventos de clase con ES7:s</h1>
            <nav>
                {/**ESTOS SON LOS EVENTOS: */}
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
            
            </>
        )

    }

    

}