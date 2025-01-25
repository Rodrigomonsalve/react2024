import React, {memo} from 'react'

const ContadorHijo = () => {

    console.log("Hijo del contador")

  return (
    <div>
        <h2>Hijo del contador</h2>
    </div>
  )
}

export default memo(ContadorHijo);
