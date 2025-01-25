import { createContext, useState } from "react";

const LanguageContext=createContext();

const initialLanguage="es";
const translation={
    es:{
        headerTitle:"Mi aplicación CON Context",
        headerSubtitle:"Mi cabecera",
        headerLigth:"Claro",
        headerDark:"Oscuro",
        buttonLogin:"Iniciar sesion",
        buttonLogout:"Cerrar sesion",
        mainWelcome:"Bienvenido",
        mainHello:"Hola usuario",
        mainContent:"Mi contenido principal",
        footerTitle:"Mi pie de pagina"
    },
    en:{
        headerTitle:"My context WITH application",
        headerSubtitle:"My header",
        headerLigth:"Ligth",
        headerDark:"Dark",
        buttonLogin:"Login",
        buttonLogout:"Logout",
        mainWelcome:"Welcome",
        mainHello:"Hi user",
        mainContent:"My main content",
        footerTitle:"My footer"
    }
}

const LanguageProvider=({children})=>{

    const [language,setLangauge]=useState(initialLanguage);
    const  [text,setText]=useState(translation[language]);

    const handleLanguage=(e)=>{
        if(e.target.value==="es"){
            setLangauge("es");
            setText(translation.es)
        }else{
            setLangauge("en");
            setText(translation.en)
        }
    }
    
    const data={text,handleLanguage}; 

    return(
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )

}


export {LanguageProvider};

export default LanguageContext;