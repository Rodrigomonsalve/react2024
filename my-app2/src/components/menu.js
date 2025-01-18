import React from 'react'
import { Link,NavLink,Router } from 'react-router-dom';
import ConceptosRouter2 from "./conceptosRouter2";

const Menu = () => {
  return (
    <nav>
        {/**NO ES LA FORMA OPTIMA DE TRABAJAR MENUS(SE RENDERIZA TODO LA PAGINA) */}
        <a href="/">Home</a>
        <a href="/acerca">Acerca</a>
        <a href="/contacto">Contacto</a> 

    {/**NAVLINK Y LINK, O EL COMPONENTE QUE LOS RENDERICE(ES ESTE CASO, MENU) DEBEN ENCONTRARSE DENTRO DE LA ETIQUETA ROUTER, PERO FUERA DE SWITCH */}
        {/**NAVLINK Y LINK FUNCIONAN EXACTAMENNTE IGUAL. AMBOS PROVOCAN QUE SÒLO SE RENDERICE EL RESULTADO DEL VINCULO */}
        <Link to="/">HOME</Link>
        <Link to="/acerca">ACERCA</Link>
        <Link to="/contacto">CONTACTO</Link>

            {/**PASO DE PARAMETROS POR LA URL: */}
        <Link to="/usuario/rodrigo">RODRIGO</Link> {/**EL PASO DE PARAMETROS SE CONFIGURA EN EL COMPONENTE A RENDERIZAR(EN ESTE CASO, Usario), MEDIANTE EL HOOK useParams, ASÍ COMO EN EL ROUTER */}
        <Link to="/usuario/pedro">PEDRO</Link>

            {/**PASO DE PARAMETROS POR LA URL: */}
        <Link to="/usuario/pedro">PEDRO</Link>

             {/**PASO DE PARAMETROS POR LA URL(OTRA FORMA): */}
        <Link to="/productos">PRODUCTOS</Link>

        
        {/**REDIRECCIONES: */}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/**RUTAS ANIDADAS: */}
        <Link to="/react">React</Link>

        {/**RUTAS PRIVADAS: Las que solamente son conocidas por usuarios autenticados */}
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        

        {/**NAVLINK AGREGA EL ATRIBUTO activeClassName, PARA QUE, CUANDO ESTEMOS DENTRO DE ESE VINCULO, EL LINK ADQUIERA EL ESTILO CSS QUE SE LE HAYA DADO */}
        <NavLink exact to="/" activeClassName='active'>HOME</NavLink>
        <NavLink exact to="/acerca" activeClassName='active'>ACERCA</NavLink>
        <NavLink exact to="/contacto" activeClassName='active'>CONTACTO</NavLink>


      
    </nav>
  )
}

export default Menu;
