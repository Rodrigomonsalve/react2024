import React, { useContext } from 'react'
import ThemeContext from './context/themeContext'
import LanguageContext from './context/languageContext';

export const MainContext = ({auth}) => {
  const {theme} =useContext(ThemeContext)
  const {text} =useContext(LanguageContext);
  return (
        <main className={theme}>
            {auth ? <p>{text.mainWelcome}</p> : <div><p>{text.mainHello}</p> <p>{text.mainContent}</p></div>}
        </main>
  )
}
