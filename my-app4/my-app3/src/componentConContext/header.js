import React, { useContext } from 'react'
import ThemeContext from './context/themeContext'
import LanguageContext from './context/languageContext';

export const HeaderContext = ({auth, handleAuth}) => { 
  
  //LOS DATOS YA NO SE OBTIENEN DESDE LOS PARENTESIS DE PARAMETROS, MEDIANTE LAS PROPS.
  //AHORA DE OBTIENEN ASÍ, MEDIANTE EL HOOK useContext. 
  const {theme,handleTheme} =useContext(ThemeContext); //HAY QUE RECORDAR QUE ThemeContext ES EL NOMBRE DEL CONTEXTO QUE CREAMOS DENTRO DEL COMPONENTE ThemeProvider.
  const {text,handleLanguage} =useContext(LanguageContext);
  return (
    <div>
        <header className={theme}>
            <h2>{text.headerTitle}</h2>
            <h3>{text.headerSubtitle}</h3>
            <form>
                <select name="language" onChange={handleLanguage}>
                    <option value="es" >ES</option>
                    <option value="en">EN</option>
                </select>
                <input type="radio" name="theme" id="ligth-context" onClick={handleTheme} value="ligth"></input>
                <label htmlFor="ligth-context">{text.headerLigth}</label>
                <input type="radio" name="theme" id="dark-context" onClick={handleTheme} value="dark"></input>
                <label htmlFor="dark-context">{text.headerDark}</label>
                <button onClick={handleAuth}>{auth ? text.buttonLogin : text.buttonLogout}</button>
            </form>
        </header>
    </div>
  )
}
