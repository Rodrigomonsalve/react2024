import React from 'react';
import Modal from "./modalChildren";
import {  useModal} from "../hooks/useModal";
import Portal from './portal';

const Modals = () => {

        const [modal1,isOpenModal1,isClosedModal1]=useModal(false);
        const [modal2,isOpenModal2,isClosedModal2]=useModal(false);
       


  return (
    <div>
    <h2>Modals</h2>
    <button>Modal 1</button>
    <Modal>
        <h3>Modal1</h3>                                             {/**ESTAS SON TODAS LAS ETIQUETAS EJEMPLO QUE PODEMOS VISUALIZAR EN EL DOM, GRACIAS A LA PROPIEDAD "children"QUE USAMOS EN EL ARCHIVO modalChildren.js*/}
        <p>Este es el contenido de mi modal 1</p>
        <img src="https://placeimg/400/400/animals" alt="Animals"></img>
    </Modal>

    <button>Modal 2</button>
    <Modal>
        <h3>Modal2</h3>
        <p>Este es el contenido de mi modal 2</p>
        <img src="https://placeimg/400/400/nature" alt="Nature"></img>
    </Modal>

    <button>Modal 2</button>
    <Portal>                                                                
        <h3>Esto es un portal</h3>
        <p>Este es el contenido de mi portal</p>
        <img src="https://placeimg/400/400/tech" alt="Tech"></img>
    </Portal>
    </div>
  )
}

export default Modals;
