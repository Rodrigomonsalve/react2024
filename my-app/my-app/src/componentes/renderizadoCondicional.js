import React,{Component} from 'react';

var session=true;

function Login() {
    return(
        <h2>"Estas logueado"</h2>
    )
    
}

function Logout() {
    return(
        <h2>No Estas logueado</h2>
    )
}

class RenderizadoCondicional extends Component{

    constructor(props){
        super(props);
        this.session1={
            loggy:true
        }
    }

    render(){
        return(
            <>
            <h1>Renderizado condicional:</h1>
            {this.session1.loggy ? <Login/>:<Logout/>}   {/**AMBAS LINEAS TIENEN EL MISMO COMPORTAMIENTO */}
            {/*{session ? <Login/>:<Logout/>}*/}
            </>
        )
    }
}

export default RenderizadoCondicional;