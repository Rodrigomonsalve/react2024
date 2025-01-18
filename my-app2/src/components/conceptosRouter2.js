import React from 'react'
import { Route, Switch,BrowserRouter as Router, Redirect } from 'react-router-dom';
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



const ConceptosRouter2 = () => {
  return (
    <div>
       
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
