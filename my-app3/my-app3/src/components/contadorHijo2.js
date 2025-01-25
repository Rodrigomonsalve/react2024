import React, {memo} from 'react'

const ContadorHijo2 = ({contador}) => {

    console.log("Hijo del contador2")

  return (
    <div>
        <h2>Hijo del contador2</h2>
        <h3>{contador}</h3>
    </div>
  )
}

export default memo(ContadorHijo2);