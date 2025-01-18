import {useState,useEffect} from 'react';

export const useForm=(initialForm,validateForm)=>{

    const [errors,setErrors]=useState({});
    const [loading,setLoading]=useState(false);
    const [form,setForm]=useState(initialForm);
    const [response,setResponse]=useState();



    //EL FIN ULTIMO DE ESTAS FUNCIONES ES IR GURDANDO EL VALOR PARA UTILIZARLO
    const handleChange=(e)=>{
        const {name, value}=e.target;
                                //ALGO QUE ES ESENCIAL PARA ENTENDER LA FUNCIONALIDAD DE ESTA FUNCION, ES QUE PARA REACT LAS VARIABLES Y OBJETOS VISIBLES O QUE SE RECIBEN DESDE EL FRONT SON INMUTABLES. PARA MODIFICARLOS HAY QUE PASAR UNA VARIABLE U OBJETO TOTALMENTE DIFERNTES POR useState PARA QUE SE VUELVAN RENDERIZAR. POR ESO NO BASTA CON PASAR DENTRO DE setForm EL OBJETO form(YA CON NUEVOS VALORES) PUES REACT ENTIENDE QUE ES EL MISMO OBJETO, SINO QUE HAY QUE VOLVERLO A MODIFICAR EXPRESAMENTE.
        setForm({...form,       //ESTA ES LA FUNCIONALIDAD PRINCIPAL EN LA VALIDACIÓN DEL FORMULARIO. SI, POR EJEMPLO, EN EL INPUT email ESCRIBO ALGO(correo@correo.com), SE ACTIVA ESTE EVENTO, PASAMOS A LA FUNCION QUE ACTIVA, EL ESTADO ACTUAL DEL FORMULARIO Y LUEGO SE LE MODIFICA mail:correo@correo.com. mail:correo@correo.com LLEGA DESDE EL input PORQUE AHÍ SE MODIFICÓ EL OBJETO FORM CON value={form.email}
            [name]:value
        }
           
        )
    };

    const handleBlur=(e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    };
    
    const handleSubmit=(e)=>{};


    return{errors,loading,form,response,handleBlur,handleChange,handleSubmit};


}