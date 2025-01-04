import React,{useState } from 'react';

export default function Formularios(params) {

    const [name,setName]=useState("");
    const [radio,setRadio]=useState("");
    const [list,setList]=useState("");
    const [check,setCheck]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    //LO IMPORTANTE DEL TEMA DE LOS FORMULARIOS EN REACT, ES LA FORMA EN QUE SE GUARDAN Y ENVIAN LOS VALORES DEL FORMULARIO(FORMULARIO,LISTA,CHECKOX,RADIO BUTTON)
    //LOS VALORES NO SE DEBEN ENVIAR DIRECTAMENTE. PRIMERO SE DEBE CAMBIAR EL ESTADO DEL FORMULARIO MEDIANTE EL EVENTO onChange.
    
    //YA LLEVAMOS 3 EVENTOS ESTUDIADOS:
    //1)onClick
    //2)onChange  -- se activa cuando el valor de un elemento de entrada va cambiando. Sirve principalmente en formularios. Cada letra ingresada lo activa.
    //3)onSubmit -- se activa cuando se intenta enviar algo de un formulario

    return(
        
        //FORMULARIOS:
        <>
        <form onSubmit={handleSubmit}>  
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={name} onChange={(e)=>setName(e.target.value)}></input>{/** */}
            <button type="submit" >Enviar</button>
        </form>


        {/**RADIO BUTTONS:*/}
        
        <form>
        <input type="radio" id="svelte" name="sabor" value="Svelte" onChange={(e)=>{setRadio(e.target.value)}} defaultChecked></input>
        <label htmlFor="svelte">Svelte</label>
        
        <input type="radio" id="vanilla" name="sabor" value="Vanilla" onChange={(e)=>{setRadio(e.target.value)}}></input>
        <label htmlFor="vanilla">Vanilla</label>
        
        <input type="radio" id="vue" name="sabor" value="Vue" onChange={(e)=>{setRadio(e.target.value)}}></input>
        <label htmlFor="vue">Vue</label>
        </form>

        {/**LISTAS: */}
        <form> 
            <select name="languaje" onChange={(e)=>{setList(e.target.value)}} defaultValue="">
                <option value="js">JAVASCRIPT</option>
                <option value="jv" defaultSelected>JAVA</option>
                <option value="py">PYTHON</option>
                <option value="rb">RUBY</option>
            </select>
        </form>

         {/**CHECK BOXES: */}
         <form>
            <label htmlFor="terminos"> Acepto terminos y condiciones</label>
            <input type="checkbox" id="terminos" onChange={(e)=>{setCheck(e.target.checked)}}></input>
         </form>
        </>
        
    )
    
}