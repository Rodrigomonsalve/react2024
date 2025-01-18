import React from 'react';
import {Redirect, Route} from 'react-router';



let auth;
  auth=true;
  auth=null;

//ASI OBTENDRIAMOS LAS PROPS DE FORMA NORMAL:
/* export const RutaPrivada = (props) => {
  return <Route exact={props.exact} path={props.path} component={props.component} ></Route>
} */


//ES OTRA FORMA DE OBTENER LAS MISMAS PROPS:
/* export const RutaPrivada = (props) => {
    return <Route{...props}></Route>
  } */


    export const RutaPrivada = ({component:Component, ...rest}) => {   //Aquí estamos destructurando las props, pero para poder trabajar sólo con el atributo "component". Normalmente sería: {component, ...rest}. Sin  embargo, no podemos trabajar con "component", porque no cumple el requisito para ser un componente, pues no empieza con mayuscula. Por esta razón lo transformamos a "Component" (:Component).
        return (
        <Route {...rest}>{auth ? <Component/>:<Redirect to="/login"></Redirect>}</Route> //En este ejemplo, <Component/> es igual a <Dashboard/>  //Es simplemente un renderizado condicional.   //auth hace las veces de un logueo exitoso o no exitoso. Hay que modificar la variable, para poder probar.
    )
      } 

  