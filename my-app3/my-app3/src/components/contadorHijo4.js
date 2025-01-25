import React, {memo, useMemo} from 'react'


//EN ESTE EJEMPLO, VEREMOS EL USO DEL HOOK useMemo.
const ContadorHijo4 = ({contador, sumar,restar}) => {


//ESTA FUNCIONALIDAD ALENTA MUCHO EL RENDERIZADO DE ESTE COMPONENTE.
    /* let superNumero=0;               

    for(let i=0;i<100000000;i++){

        superNumero++;
    } */


//DADO QUE LA FUNCIONALIDAD ANTERIOR ALENTA EL RENDERIZADO DE ESTE COMPONENTE, NO SERÍA CORRECTO PERMITIR QUE SE EJECUTARA SIEMPRE QUE SE RE-RENDERIZARA. POR ESTA RAZÓN, HAY QUE USAR EL HOOK useMemo PARA MEMORIZAR EL VALOR OBTENIDO CON LA FUNCIONALIDAD LENTA.
//MIENTRAS QUE useCallback MEMORIZA FUNCIONES, useMemo MEMORIZA VALORES. POR ESO, LA FUNCION QUE INGRESE COMO PARAMETRO A ESTE HOOK, SIEMPRE DEBE RETORNAR ALGO.
    const superNumero=useMemo(()=>{

        let numero=0;

        for(let i=0;i<1000000000;i++){
    
            numero++;
        }

        return numero;
    }
       ,[]);


  return (
    <div>
        <h2>Hijo del contador4</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        <h3>{superNumero}</h3>
    </div>
  )
}

export default memo(ContadorHijo4);