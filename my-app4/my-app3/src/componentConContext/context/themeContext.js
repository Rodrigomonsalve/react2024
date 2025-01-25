import { createContext, useState } from "react";

const ThemeContext=createContext(); //HOOK PARA CREAR EL CONTEXTO. SE LLAMARÁ, EN ESTE CASO, ThemeContext.
const initialTheme="ligth";


//ESTE UN COMPONENTE QUE CREA DATOS DE FORMA GLOBAL, PARA ENVOLVER A LOS DEMAS COMPONENTES QUE VAN A USAR ESOS DATOS.
const ThemeProvider=({children})=>{

    //FUNCIONALIDAD NORMAL:
    const [theme,setTheme]=useState(initialTheme);  

    const handleTheme=(e)=>{
        if(e.target.value==="ligth"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

    //ESTOS SON LOS DATOS QUE,ORIGINALMENTE, PASRÍAN COMO PROPS EN LOS COMPONENTES RESPECTIVOS, Y QUE AHORA SE CONVIERTEN EN GLOBALES.
    //<HeaderContext theme={theme} handleTheme={handleTheme}/>
    const data={theme,handleTheme};

    //ASI SE RETORNAN LOS DATOS EN UN COMPONENTE API CONTEXT:
    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider};

export default ThemeContext;