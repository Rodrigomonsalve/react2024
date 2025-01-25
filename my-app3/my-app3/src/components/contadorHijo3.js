import React, {memo} from 'react'

const ContadorHijo3 = ({contador, sumar,restar}) => {

    console.log("Hijo del contador3")

  return (
    <div>
        <h2>Hijo del contador3</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
    </div>
  )
}

export default memo(ContadorHijo3);