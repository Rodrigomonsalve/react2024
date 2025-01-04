import React, {createRef,useRef} from 'react';

//EN REACT NO SE DEBE MANIPULAR EL DOM DIRECTAMENTE(COMO SE HARÍA NORMALMENTE CON HTML Y JAVASCRIPT), AUNQUE SEA POSIBLE HACERLO.

export default function Referencias(params) {

    //Primero debemos crear las referencias mediante el uso de useRef ó createRef(ÉSTE ES PARA COMPONENTES FUNCIONALES)
    //Las referencias van a sustituir al atributo "id" de las etiquetas html. Eso es todo.
    //let refMenu=createRef(),
    let refMenu=useRef(),         //DEVUELVEN UN OBJETO
        refMenuBtn=useRef();

    const handelToggleMenu=(e)=>{

        //ASÍ MANIPULARÍAMOS EL DOM DIRECTAMENTE:
        /*const $menu=document.getElementById("menu");
        console.log($menu);

        if(e.target.textContent==="Menu"){
            e.target.textContent="Cerrar";
            $menu.style.display="block"
        }else{
            e.target.textContent="Menu";
            $menu.style.display="none";
        }*/

        //ASÍ MANIPULAMOS EL DOM CON REFERENCIAS:
        if(refMenuBtn.current.textContent==="Menu"){  //Para saber qué atributos(current) del objeto,en este caso, refMenu, usar, se recomienda  hacer console.log 
            refMenuBtn.current.textContent="Cerrar";
            refMenu.current.style.display="block"
        }else{
            refMenuBtn.current.textContent="Menu";
            refMenu.current.style.display="none";
        }

    }

    return(

        //LAS REFERENCIAS SE COLOCAN DIRECTAMENTE EN LAS ETIQUETAS HTML PARA IDENTIFICARLAS:
        <>
        <h3>Referencias:</h3>
        <button ref={refMenuBtn} onClick={(e)=>handelToggleMenu(e)}>Menu</button>
        <nav ref={refMenu} style={{display:"none"}}>
            <a href="#">Seccion 1</a>
            <br/>
            <a href="#">Seccion 2</a>
            <br/>
            <a href="#">Seccion 3</a>
            <br/>
            <a href="#">Seccion 4</a>
            <br/>
            <a href="#">Seccion 5</a>
            <br/>
        </nav>
        </>



    );


}