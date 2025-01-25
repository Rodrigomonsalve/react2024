import React from 'react'
import { Route, Switch,BrowserRouter as Router, Redirect, HashRouter,Link } from 'react-router-dom';
import Contacto from '../pages/contacto';
import Acerca from '../pages/acerca';
import Home from '../pages/home';
import Error404 from '../pages/error404';
import Menu from './menu';
import Usuario from '../pages/usuario';
import Productos from '../pages/productos';
import { ReactTopics } from '../pages/reactTopics';
import { Login } from '../pages/login';
import { Dashboard } from '../pages/dashboard';
import { RutaPrivada } from './rutaPrivada';


//LO QUE HACEN ROUTE(BrowserRouter O HashRouter) EN CONJUNTO CON LINK, ES ¡SÓLO RENDERIZAR EL COMPONENTE REQUERIDO!. ¡NO NECESITA QUE EXISTA ALGUNA CARPETA DENTRO DEL SERVIDOR QUE CONTENGA LA INFORMACION REQUERIDA! POR EJEMPLO, LA CARPETA /contactos. POR ESTA RAZÓN, SI QUEREMOS VISITAR EN PRODUCCIÓN(EL PROBLEMA SE PRESENTA EN PRODUCCIÓN) DIRECTAMENTE https://hostname/contactos, SI LA CARPETA NO EXISTE, NUNCA SE ENCONTRARÁ ESA RUTA, PORQUE EN REALIDAD NO EXISTE. REALMENTE SON RUTAS FALSAS.
//DE ACUERDO A LO ANTERIOR, SI LA RUTA EN EL SERVIDOR SÍ EXISTE, ENTONCES DEBES USAR BrowserRouter. SI NO EXISTE(TU APLICACIÓN SE BASA EN MERAS PETICIONES A APIS) ENTONCES USA HashRouter. CON HASHROUTER LA RUTA SE VERÍA ASÍ: https://hostname/#/contactos (ASI SE LE INDICA QUE /contactos NO EXISTE EN EL SERVIDOR)
const ConceptosRouter2 = () => {
  return (
    <div>
        {/**RUTEO CON HashRouter*/}
        <h3>Hash Router</h3>
        <HashRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/contacto">Contacto</Link>            
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/acerca" component={Acerca} />
                <Route exact path="/contacto" component={Contacto} />
                <Route path="*" component={Error404} />  
            </Switch>
        </HashRouter>
       
       {/**RUTEO CON BrowserRouter*/}
        <Router>
            <Menu></Menu>
            <Switch>             
                <Route exact path="/" component={Home} />
                <Route exact path="/acerca" component={Acerca} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/usuario/:username" component={Usuario} />{/**PASO DE PARMETROS MEDIANTE URL. LOS DOS PUNTOS(:) SIGNFICA QUE HABRÁ UN  PARAMETRO POR PASAR. PUEDES COLOCAR LOS QUE SEAN (/usuario/:username/:age). EL PASO DE PARAMETROS SE CONFIGURA EN EL COMPONENTE A RENDERIZAR(EN ESTE CASO, Usario), MEDIANTE EL HOOK useParams */}
                <Route exact path="/productos" component={Productos}/>

                {/**ESTO EJEMPLIFICA UNAS RUTAS ANIDADAS. AL INGRESAR A /react, EL COMPONENTE ReactTopics A SU VEZ TIENE MAS RUTAS DENTRO: <Link>s */}
                <Route path="/react" component={ReactTopics}/> {/**NO HAY QUE PONER EL ATRIBUTO exact, PORQUE, UNA VEZ QUE INTENTEMOS IR A LA DE LA SUBRRUTA NUNCA VA A SER EXACTA */}
                
                
                {/**LAS SIGUIENTES RUTAS SON PARA ENTENDER EL TEMA DE RUTAS PRIVADAS. PARA PROTGER UNA RUTA, SIMPLEMENTE CREAMOS EXACTAMENTE LA MISMA RUTA, PERO DENTRO DE UN COMPONENTE AL QUE LE PASAMOS LAS PROPIEDADES QUE YA CONOCEMOS(exact,component,path) COMO PROPS Y ALLA RESCATAMOS LOS VALORES. EN ESTE CASO, Dashboard LO ENCAPSULAMOS EN <RutaPrivada>. ALLA HAY MAS LOGICA  */}
                <Route exact path="/login" component={Login}></Route>
                {/* <Route exact path="/dashboard" component={Dashboard}></Route> */}
                <RutaPrivada exact path="/dashboard" component={Dashboard}></RutaPrivada> 


                {/**REDIRECCIONES: */}
                <Route exact path="/about">
                    <Redirect to="/acerca"/>
                </Route>
                <Route exact path="/contact">
                    <Redirect to="/contacto"/>
                </Route>
                <Route path="*" component={Error404} />                 {/**ASI SE CREA UNA RUTA DE ERROR 404. SIEMPRE DEBE IR AL FINAL DE LAS RUTAS, PORQUE AL COLOCAR EL COMODIN(*) COINCIDIRÁ CON CUALQUIER RUTA QUE BUSQUEMOS EN EL NAVEGADOR, Y VISITARÁ EL ERROR404 EN SU LUGAR*/}
            </Switch>
        </Router>
    </div>
  )
}

export default ConceptosRouter2;
