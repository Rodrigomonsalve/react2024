import React from 'react';
import Bootstrap from './components/bootstrap';
import Bulma from './components/bulma';
import ConceptosRouter from './components/conceptosRouter';
import ConceptosRouter2 from './components/conceptosRouter2';
import Usuario from './pages/usuario';


function App() {
  return (
    <div>
      <h1>Frameworks CSS con React</h1>
      {/* <Bootstrap></Bootstrap> */}             {/**YA CON REACT ROUTER ESTA PARTE PODRÍA SER LA CABECERA Y HASTA ABAJO EL COMPONENTE DEL PIE DE PAGINA */}
      {/* <Bulma></Bulma>
      <h1>React Router</h1>
      <a href="https://reactrouter.com/home"  target="_blank" rel="noreferrer" >Documentacion</a>
      <hr></hr> */}
     {/*  <ConceptosRouter></ConceptosRouter> */}   {/**ESTE ES ES UN COMPONENTE QUE FUNCIONA COMO ROUTER */}
      <ConceptosRouter2></ConceptosRouter2>
    </div>
  );
}

export default App;
