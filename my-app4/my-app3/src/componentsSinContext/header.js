import React from 'react'

export const Header = ({theme, handleTheme, handleLanguage,auth, handleAuth, text}) => {
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
                <input type="radio" name="theme" id="ligth" onClick={handleTheme} value="ligth"></input>
                <label htmlFor="ligth">{text.headerLigth}</label>
                <input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark"></input>
                <label htmlFor="dark">{text.headerDark}</label>
                <button onClick={handleAuth}>{auth ? text.buttonLogin : text.buttonLogout}</button>
            </form>
        </header>
    </div>
  )
}
