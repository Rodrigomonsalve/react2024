import React from 'react'

export const Footer = ({theme, text}) => {
  return (
    
        <footer className={theme}>
             <h4>{text.footerTitle}</h4>
        </footer>
    
  )
}
