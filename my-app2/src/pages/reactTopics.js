import React from 'react'
import { Link,Switch, Route, useParams, useRouteMatch } from 'react-router-dom'

//ESTE ES UN COMPONENTE QUE PUEDE ESTAR EN UN ARCHIVO POR SEPARADO(como todos los demas ejemplos)
const Topic=()=>{
    let {topic}=useParams();

    return(
        <div>
            <h4>
                {topic}
                <p>Lorem ipsum</p>
            </h4>
        </div>
    )
}

export const ReactTopics = () => {

    let {path,url}=useRouteMatch(); //ESTE HOOK (useRouteMatch) SE USA PARA OBTENER LA RUTA ACTUAL, EN ESTE CASO, "/react". (Revisar el Router que dirigió hasta acá).  // url SE DEBE USAR DENTRO <Link> Y path DENTRO DE Route. AMBOS ATRIBUTOS TRAEN LA MISMA INFORMACIÓN.

  return (
    <div>
    <h3>React Topics</h3>
    <ul>
        <li>
            <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
            <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
            <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
            <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
    </ul>

    {/**COMO ES DE ESPERARSE, LAS ANTERIORES SUBRUTAS DEBEN TENER SUS ROUTES */}
    <Switch>             
                <Route exact path={path}>
                    <h4>Elige un tema de React</h4>
                    <p>Lorem ipsum</p>
                </Route>
                <Route exact path={`${path}/:topic`} component={Topic} /> {/**:topic SE VE REEMPLAZADO POR jsx o props o estado o componentes */}
                
    </Switch>
    </div>
  )
}
