import React, { useState } from 'react'
import { HeaderContext } from './header'
import { MainContext } from './main'
import { FooterContext} from './footer'
import { ThemeProvider } from './context/themeContext';
import { LanguageProvider } from './context/languageContext';



const initialAuth=true;



//LA API CONTEXT SIRVE PARA MANEJAR DATOS DE FORMA GLOBAL(RESPECTO A TODO EL PROYECTO) SIN NECESIDAD DE TENER QUE ESTAR PASÁNDOLOS COMO PROPS A LOS COMPONENTES. 
//SE USAN CUANDO LOS DATOS SE VAN A USAR EN 2 O MAS COMPONENTES. EJEMPLOS DE ESTOS DATOS SON LOS REFERENTES A LOS TEMAS(OSCUROS O CLAROS), MANEJO DE IDIOMAS DE LA APLICACION E INFORMACION A MOSTRAR DESPUES DE UN INICIO DE SESION EXITOSO.
//LA UTILIDAD DEL CONTEXTO ES QUE NO TENEMOS QUE ESTAR PASANDO CONSTANTEMENTE LA INFORMACION A TRAVES DE PROPS.
export const MyPageContext = () => {

    
    const [auth, setAuth]=useState(initialAuth);

    

    const handleAuth=(e)=>{
        if(auth){
            setAuth(null);
        }else{
            setAuth(true);
        }
    }
    
  return (
    <div className='my-page'>

        {/**AQUI YA ESTOY HACIENDO USO DEL CONTEXTO. LO UNICO QUE SE HACE ES ENVOLVER A TODOS LOS COMPONENTES QUE VAN A HACER USO DE LOS DATOS GLOBALES, CON OTRO(s) COMPONENTE(s) QUE NOSOTROS CREEMOS. EN ESE OTRO COMPONENTE(s), CREAREMOS LOS DATOS GLOBLES. VER COMPONENTE ThemeProvider,LanguageProvider*/}
        {/** SI NOS FIJAMOS YA NO ESTAMOS PASANDO COMO PROPS LA INFORMACIÓN:  */}
        {/**<HeaderContext theme={theme} handleTheme={handleTheme} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth} text={texts}/> */}
        {/**AUNQUE NO PASEMOS LA INFORMACIÓN COMO PROPS, AUN ASI, HAY QUE RECUPERARLA DENTRO DE LOS COMPONENTES RESPECTIVOS. VER COMPONENTES: HeaderContext, MainContext, FooterContext */}
        <ThemeProvider>
        <LanguageProvider>
            <HeaderContext auth={auth} handleAuth={handleAuth}/>
            <MainContext auth={auth}/>
            <FooterContext/>
        </LanguageProvider>
        </ThemeProvider>
        
    </div>
  )
}
