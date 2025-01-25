import React from 'react'

export const Main = ({theme, text, auth}) => {
  return (
        <main className={theme}>
            {auth ? <p>{text.mainWelcome}</p> : <div><p>{text.mainHello}</p> <p>{text.mainContent}</p></div>}
        </main>
  )
}
