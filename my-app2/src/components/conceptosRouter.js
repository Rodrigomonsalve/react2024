import React from 'react'
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom'; 
import Contacto from '../pages/contacto';
import Acerca from '../pages/acerca';

//HASTA EL MOMENTO HAY VARIAS VERSIONES DE REACT-ROUTER:
//PARA TRABAJAR CON REACT ROUTER ES ACONSEJABLE QUITAR EL STRICT-MODE DEL INDEX.JS.
//¡¡¡ESTAS NO SON RUTAS DE APIS. SON 2 COSAS DIFERENTES.S LAS APIS SE CONFIGURAN DESDE EL BACKEND, EN NUESTRO CASO EL CONTROLADOR DE SPRINGBOOT. SIN EMBARGO, HAY QUE SER MUY CUIDADOSOS DE QUE LAS RUTAS DE LAS APIS NO COINCIDAN CON LAS RUTAS DE REACT-ROUTER!!!! 
const ConceptosRouter = () => {
  return (
    <div>
    <h2>conceptos Router</h2>
    <Router>                                {/**TODO DEBE IR DENTRO DE UN "ROUTER" */}
        <Switch>                            {/**SWITCH ES OPCIONAL. AL COLOCAR SWITCH, CUANDO NOS DIRIJIMOS A ALGUNA RUTA EN EL NAVEGADOR(/acerca) SE VA BUSCANDO DE ARRIBA HACIA ABAJO Y TE ARROJARÁ LA PRIMERA COINCIDENCIA QUE ENCUENTRE. POR ESO SI BUSCAMOS /acerca PERO ANTES ESTA /, TE ARROJARÁ EL CONTENIDO DE /. POR ESO LA BUENA PRÁCTICA ES ORDENAR LAS RUTAS DE LA MAS ESPECÍFICA A LA MAS GENERICA. SIN "Switch" CUANDO BUSQUES UNA RUTA, TE ARROJARÁ ¡TODAS! LAS COINCIDENCIAS EN UNA MISMA PAGINA: /contacto/nombre  -> TE MOSTRARÁ 3: /, /contacto,  /contacto/nombre*/}
                                            {/** exact SIRVE PARA QUE, TOMANDO EN CUENTA LO EXPLICADO UNA LINEA ARRIBA, SE ENCUENTRE ÚNICA Y EXCLUSIVAMENTE LA RUTA EXACTA SOLICITADA */}
        <Route exact path="/contacto">      {/**CADA RUTA DEBE IR DENTRO DE "ROUTE" */}
         <Contacto></Contacto>
        </Route>

        {/**HAY VARIAS FORMAS DE CREAR UNA RUTA*/}

        {/**MODO1: */}{/**ESTA ES LA MEJOR FORMA DE HACERLO(ES LA BUENA PRACTICA):*/}
        <Route exact path="/acerca" component={Acerca}/>

         {/**MODO2: */}
        <Route exact path="/acerca">
            <Acerca/>                   
        </Route> 
    
         {/**MODO3: */}
        <Route exact path="/acerca" children={<Acerca/>}/> 

            {/**MODO3.1 */}
        <Route exact path="/acerca" children={<><Acerca/><p>Esto es un acerca</p></>}/> {/**AQUI PODEMOS PODEMOS PONER MUCHISIMO CODIGO */}

        <Route exact path="/">
            <h3>Home</h3>
        </Route>

        </Switch>
    </Router>
    </div>
  )
}

export default ConceptosRouter;
