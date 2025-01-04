import logo from './logo.svg';
import './App.css';  // SIEMPRE NECESITAS IMPORTAR EL ARCHIVO CSS
import ComponenteDeClase from "./componentes/componenteDeClase";
import ComponenteFuncional from "./componentes/componenteFuncional";
import ComponenteConPropiedades from "./componentes/propiedades";
import Estado from "./componentes/estado";
import RenderizadoCondicional from "./componentes/renderizadoCondicional";
import RenderizadoDeElementos from "./componentes/renderizadoDeElementos";
import RenderizadoDeElementos2 from "./componentes/renderizadoDeElementos2";
import Eventos from "./componentes/eventos";
import EventosES7 from "./componentes/eventosES7";
import ManejadorDeEventos from "./componentes/manejadorDeEventos";
import EventosPersonalizados from "./componentes/eventosPersonalizados";
import ComunicacionEntreComponentesPadre2 from "./componentes/comunicacionEntreComp2";
import ComunicacionEntreComponentesPadre from './componentes/comuicacionEntreComp';
import ClaseFetch from './componentes/fetch';
import UsoDeUseState from './funcionales/useState';
import UsoDeUseEffect from './funcionales/useEffect';
import UsoDeUseEffect2 from  './funcionales/useEffect2';
import FetchConFuncion from  './funcionales/fecth';
import CustomHook from './funcionales/customHooks';
import Referencias from './funcionales/referencias';
import Formularios from './funcionales/formularios';
import Estilos from './funcionales/estilos';
import ComponenteEstilizado from './funcionales/styledComponent';


let nombre="Rodrigo";{/**VARIABLE A INTERPOLAR */}
const booly=true;{/**VARIABLE A INTERPOLAR */}

//ESTO ES CÓDIGO JSX. NO ES HTML. 
//BABEL ES QUIEN SE ENCARGA DE TRADUCIR EL CÓDIGO JSX A CÓDIGO JAVASCRIPT. JAVASCRIPT ES QUIEN EN REALIDAD SE EJECUTA TODO EL TIEMPO.
//DADO QUE EN RELIDAD ES CÓDIGO JAVASCRIPT, NO SE PUEDEN UTILIZAR PALABRAS RESERVADAS DENTRO DE CÓDIGO JSX, COMO "class". POR ESO SE USA className.
function App() {
  return (
    <div className="App">  {/**HAY QUE RECORDAR QUE EL ATRIBUTO "class" EN HTML SIRVE PARA CARGAR ESTILOS CSS */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{nombre}</h2>   {/*Así se interpolan variables dentro de código jsx para ser renderizados*/}{/**LOS OBJETOS NO SON RENDERIZABLES DIRECTAMENTE */}
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
        <section>
          {/**LOS SIGUIENTES SON EJEMPLOS DE COMPONENTES. ÉSTOS SON CLASES O FUNCIONES QUE SE CREA EN SU CORRESPONDIENTE JAVASCRIPT, Y CON SÓLO CREAR UNA ETIQUETA CON EL NOMBRE DE LA CLASE O FUNCION NOS TRAEMOS SU COMPORTAMIENTO. ANTES DEBEN IMPORTARSE */}
          {/**TODOS DEBEN COMENZAR CON MAYUSCULA */}
          <ComponenteDeClase/>
          <ComponenteFuncional/>
          <ComponenteConPropiedades nombre="Rodrigo" edad={35}></ComponenteConPropiedades> {/**SON PROPIEDADES (nombre,edad) QUE PUEDEN LLEVAR LOS COMPONENTES. LOS PASAMOS DESDE LAS ETIQUETAS QUE AYUDAN A RENDERIZAR COMPONENTES HACIA EL CÓDIGO DEL COMPONENTE, PARA ORDENAR ESA INFORMACIÓN COMO DESEEMOS */}
          <RenderizadoCondicional></RenderizadoCondicional>
          <RenderizadoDeElementos></RenderizadoDeElementos>
          <RenderizadoDeElementos2></RenderizadoDeElementos2>
          <Estado></Estado>
          <Eventos></Eventos>
          <EventosES7></EventosES7>
          <ManejadorDeEventos/>  
          <EventosPersonalizados></EventosPersonalizados>
          <ComunicacionEntreComponentesPadre></ComunicacionEntreComponentesPadre>  
          <ComunicacionEntreComponentesPadre2></ComunicacionEntreComponentesPadre2>
          <ClaseFetch></ClaseFetch> 
          <UsoDeUseState></UsoDeUseState>
          <UsoDeUseEffect></UsoDeUseEffect>
          <UsoDeUseEffect2></UsoDeUseEffect2>
          <FetchConFuncion></FetchConFuncion>
          <CustomHook></CustomHook>
          <Referencias></Referencias>
          <Formularios></Formularios>
          <Estilos></Estilos>
          <ComponenteEstilizado></ComponenteEstilizado>
          </section>
      </header>
    </div>
  );
}

export default App;
