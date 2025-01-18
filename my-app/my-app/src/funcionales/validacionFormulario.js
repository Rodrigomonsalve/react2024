import React from 'react';
import { useForm } from '../hooks/useForm';

export default function ValidacionFormuario() {

    const initialForm={
        name:"",
        mail:"",
        subject:"",
        comments:""
    };
    const validateForm=(form)=>{
            let errors={};

            if(!form.name.trim()){
                errors.name="El campo nombre es requerido";
            }
            if(!form.mail.trim()){
                errors.mail="El campo correo es requerido";
            }
            if(!form.subject.trim()){
                errors.subject="El campo asunto es requerido";
            }
            if(!form.comments.trim()){
                errors.comments="El campo comentarios es requerido";
            }
            return errors;
    };

    const {errors,loading, form,response,handleBlur,handleChange,handleSubmit}=useForm(initialForm,validateForm);

    return(
        <div>
            {/**Cuando yo escribo algo en algun input, se activa onChange que activa handleChange. Ahi se recibe el formulario(form) en su estado actual y se le modifica el campo respectivo de forma expresa para que pueda volver a ser renderizado(el valor llega porque desde el value={form.mail} se modificó el form), para ser re-renderizado mediante useState   */}
            <h2>Formulario de contacto:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onBlur={handleBlur} onChange={handleChange} placeholder='Escribe tu nombre' required></input>
                {errors.name && <p>{errors.name}</p>}
                <input type="email" name="mail" value={form.mail} onBlur={handleBlur} onChange={handleChange} placeholder='Ingresa tu correo' required></input>
                {errors.mail && <p>{errors.mail}</p>}
                <input type="text" name="subject" value={form.subject} onBlur={handleBlur} onChange={handleChange} placeholder='Asunto' required></input>
                {errors.subject && <p>{errors.subject}</p>}
                <input type="textarea" name="comments" value={form.comments} onBlur={handleBlur} onChange={handleChange} placeholder='Comentarios' required></input>
                {errors.comments && <p>{errors.comments}</p>}
                <input type="submit" value="Enviar"></input>

            </form>
        </div>
    )
    
}