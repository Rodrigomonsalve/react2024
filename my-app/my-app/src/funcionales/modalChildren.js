import React from 'react'

export const Modal = ({children}) => {                        //AQUI LO IMPORTANTE ES APRENDER LA PROPIEDAD "children". TODOS LOS COMPONENTES LA TRAEN POR DEFECTO. NO ES NECESARIO CREAR UNA PROPIEDAD EN LA ETIQUETA DEL COMPONENTE COMO SE HARÍA NORMALMENTE.
  return (
    <article className='modal-is-open'>
        <div className='modal-container'>
            <button className='modal-close'></button>
            {children}                                      {/**LA PROPIEDAD "children" SIRVE PARA QUE PODAMOS COLOCAR Y SEÑALAR LA UBICACIÓN DE CUALQUIER TIPO DE CONTENIDO HTML DENTRO DEL COMPONENTE UNA VEZ QUE ES INVOCADO, COMO LO HACEMOS EN modalsChildren.js*/}
        </div>
    </article>
  )
}

export default Modal;
