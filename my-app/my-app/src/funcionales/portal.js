import React from 'react';
import ReactDOM from "react-dom";

export const Portal = ({children}) => {                       
  return ReactDOM.createPortal(            //ReactDOM.createPortal ayuda a que este componente se renderice en el nodo que nosotros elijamos, diferente al de "root". Se hace desde el index.html
    <article>
        <div>
            <button></button>
            {children}                                      
        </div>
    </article>,
    document.getElementById("portal")   //El nodo que esta en el index.html tiene como id "portal". Nosotros lo escogemos.
  );
}

export default Portal;
