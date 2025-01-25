import React, { useState } from 'react'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

const initialTheme="ligth";
const initialLanguage="es";
const initialAuth=true;

const translation={
    es:{
        headerTitle:"Mi aplicación Context",
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
        headerTitle:"My context application",
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

export const MyPage = () => {

    const [theme,setTheme]=useState(initialTheme);
    const [language,setLangauge]=useState(initialLanguage);
    const  [texts,setTexts]=useState(translation[language]);
    const [auth, setAuth]=useState(initialAuth);

    const handleTheme=(e)=>{
        if(e.target.value==="ligth"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

    const handleLanguage=(e)=>{
        if(e.target.value==="es"){
            setLangauge("es");
            setTexts(translation.es)
        }else{
            setLangauge("en");
            setTexts(translation.en)
        }


    }

    const handleAuth=(e)=>{

        if(auth){
            setAuth(null);
        }else{
            setAuth(true);
        }

    }
    

  return (
    <div className='my-page'>
        <Header theme={theme} handleTheme={handleTheme} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth} text={texts}/>
        <Main theme={theme} text={texts} auth={auth}/>
        <Footer theme={theme} text={texts}/>
    </div>
  )
}
