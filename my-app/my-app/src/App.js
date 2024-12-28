import logo from './logo.svg';
import './App.css';  // SIEMPRE NECESITAS IMPORTAR EL ARCHIVO CSS


let nombre="Rodrigo";{/**VARIABLE A INTERPOLAR */}
const booly=false;{/**VARIABLE A INTERPOLAR */}

//ESTO ES CÓDIGO JSX. NO ES HTML. 
//BABEL ES QUIEN SE ENCARGA DE TRADUCIR EL CÓDIGO JSX A CÓDIGO JAVASCRIPT. JAVASCRIPT ES QUIEN EN REALIDAD SE EJECUTA TODO EL TIEMPO.
//DADO QUE EN RELIDAD ES CÓDIGO JAVASCRIPT, NO SE PUEDEN UTILIZAR PALABRAS RESERVADAS DENTRO DE CÓDIGO JSX, COMO "class". POR ESO SE USA className.
function App() {
  return (
    <div className="App">  {/**HAY QUE RECORDAR QUE EL ATRIBUTO "class" EN HTML SIRVE PARA CARGAR ESTILOS CSS */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{nombre}</h2>   {/*Así se interpolan variables dentro de código jsx */}
        <h3>{booly ? "Usuario encontrado":"Usuario no encontrado"}</h3>  {/**Así se pueden interpolar condicionales */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
