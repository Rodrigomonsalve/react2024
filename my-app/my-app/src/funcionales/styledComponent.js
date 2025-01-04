import React from "react";
import styled,{css,keyframes,ThemeProvider, createGlobalStyle} from "styled-components";

//PARA USAR LOS STYLED COMPONENTS NECESITAMOS DESACRAGRLO: npm install styled-components
export default function ComponenteEstilizado(params) {
    let mainColor="#db7093",
         mainAlphaColor89="#db709380";


         const setTransitionTime=(time)=>`all ${time} ease-in-out`;
         const fadeIn=keyframes`
            0%{
                opacity: 0;
            }
            
            100%{
                opacity: 1;
            }
         `;


    //**PARA CREAR ESTOS COMPONENTES (STYLED-COMPONENTS) SE UTILIZA EL OBJETO styled, Y ESCOGEMOS EL TIPO DE ETIQUETA QUE USARÁ. EN ESTE CASO, <H3>
    //**AL DEVOLVER LAS ETIQUETAS EN EL return, UTILIZAREMOS LA VARIABLE CREADA, COMO SI FUERA UN COMPONENTE
    //**TODO ES CÓDIGO CSS DENTRO.
    //**RECORDAR LAS PROPS. FUNCIONAN IGUAL EN ESTOS STYLED COMPONENTS, COMO PODEMOS VER EN color.
    //**TAMBIEN PODEMOS INTERPOLAR VARIABLES, COMO EN EL CASO DE  background-color.
    //**"css" SIRVE PARA QUE PODAMOS INTERPOLAR CÓDIGO CSS, COMO EN EL CASO DE isButton.
    const MyH3=styled.h3`
    padding:2rem;
    text-align:center;
    color:${props=>props.color}; 
    background-color:${mainColor};
    transition:${setTransitionTime("1s")};
    animation:&{fadeIn} 10s ease-out;

    ${(props)=>props.isButton && 
        css`
        margin:auto;
        max-width:50%;
        border-radius:0.25rem;
        cursor:pointer;
        `}
    
    
    &:hover{background-color:${mainAlphaColor89};
    }`;

    const ligth={
        color:"#222",
        bgColor:"#DDD"
    }

    const dark={
        color:"#DDD",
        bgColor:"#222"
    }

    const Box=styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme})=>theme.color};
        background-color:${({theme})=>theme.bgColor};
    `
    //** styled() SIRVE PARA PODER HEREDAR ESTILOS DE OTROS STYLED-COMPONENTS. EN ESTE CASO, BoxRounded HEREDA DE Box
    const BoxRounded=styled(Box)`  
        border-radius:1rem;
    `

    //**HAY QUE TENER CUIDADO CON ESTE OBJETO(createGlobalStyle) 
    //**MODIFICA ¡¡¡TODAS!! LAS ETIQUETAS DEL PROYECTO. EN ESTE CASO LAS <H2> 
    //**SE RECOMIENDA USAR EN EL INDEX.JS 
    const GlobalStyle=createGlobalStyle`
        h2{
        padding:2rem;
        background-color:#fff;
        color:#61dafb;
        text-transform:uppercase;
        }
    `

    return(
        <>
        <GlobalStyle>

        </GlobalStyle>
        <MyH3>Componente estilizado</MyH3>
        <MyH3 color="#61dafb">Componente estilizado 2</MyH3>
        <MyH3 isButton>Componente estilizado como Boton</MyH3>
        <ThemeProvider theme={ligth}>                               {/**ThemeProvider ES UN COMPONENTE QUE YA NOS PROVÉE "STYLED-COMPONENTS", Y TIENE COMO FINALIDAD ENVOLVER A OTROS COMPONENTES A QUIENES SE LES APLICARÁ EL ESTILO DE ThemeProvider, FUNCIONANDO A MODO DE TEMA */}
            <Box >Soy una caja ligth</Box>
            <BoxRounded>Soy una caja redondeada ligth</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
            <Box>Soy una caja dark</Box>
            <BoxRounded>Soy una caja redondeada dark</BoxRounded>
        </ThemeProvider>
        </>
    )
    
}