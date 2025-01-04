import React,{Component} from 'react';


// EL ESTADO ES UN OBJETO QUE PERMITE A LOS COMPONENTES MANEJAR Y ALMACENAR DATOS DINÁMICOS QUE PUEDEN CAMBIAR CON EL TIEMPO. 
// CUANDO EL ESTADO CAMBIA SE VUELVE A RENDERIZAR SÓLO ESE COMPONENTE.
// LOS COMPONENTES FUNCIONALES SÓLO MANEJAN EL ESTADO A PARTIR DEL HOOK "useState".


//EN EL SIGUIENTE CASO, EJEMPLIFICAMOS LA MODIFICACIÓN DEL ESTADO MEDIANTE UN COMPONENTE DE CLASE. NORMALMENTE SE USA EN SU LUGAR UN COMPONENTE FUNCIONAL
export default class Estado extends Component{

    constructor(){
            super();
            this.state={               //EL OBJETO state ES EL QUE VA A ESTAR CAMBIANDO
                variableConEstado:0
            }
            
            setInterval(() => {                                                        //SETINTERVAL SÓLO LO USAMOS PARA EJEMPLIFICAR. NO ES INDISPESABLE EN EL CAMBIO DE ESTADO.
                this.setState({variableConEstado:this.state.variableConEstado+1})      //MODIFICAR EL ESTADO, IMPLICA CREAR UNA RÉPLICA DEL OBJETO Y A ESA RÉPLICA ASIGNARLE UN NUEVO VALOR. NO SE MODIFICA EL VALOR DEL OBJETO DIRECTAMENTE. ESTO SE LOGRA ÚNICAMENTE EJECUTANDO EL MÉTODO setState DE LA CLASE Component.
            }, 2000);                                                                  //DERIVADO DE LO ANTERIOR, ¡Y ESTO ES MUY IMPORTANTE!, NO PUEDES MODIFICAR EL VALOR DE VARIABLES U OBJETOS DESDE EL CÓDIGO DE NINGUNA OTRA FORMA(COMO NORMALMENTE SE HARÍA REASIGNANDO VALORES O PASANDO PARÁMETROS). NO SE VERÍAN REFLEJADOS LOS CAMBIOS.  SOLO SE PUEDE HACER "MODIFICANDO SU ESTADO".
    }

    render(){

        return (
            <>
            <h1>State:</h1>
            <h2>{this.state.variableConEstado}</h2>
            </>
        )

}
}