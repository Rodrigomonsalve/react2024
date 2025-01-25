import React, { useContext } from 'react'
import ThemeContext from './context/themeContext'
import LanguageContext from './context/languageContext';

export const FooterContext = () => {
  const {theme} =useContext(ThemeContext);
  const {text} =useContext(LanguageContext);
  return (
    
        <footer className={theme}>
             <h4>{text.footerTitle}</h4>
        </footer>
    
  )
}
