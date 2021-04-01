/*
En React hay dos tipos de componentes, los componentes basados en clases y los que estan basados en funciones.

Se debe trabajar Funcional Components (Componentes basados en funciones).
Anteriormente se trabajaba con Stateless Funcional Components (Por que no podian manejar estados)

FC -> Funcional Components
``````````````````````````
*/
// No imprime booleanos en el DOM
// Los arreglos los imprime de manera separada
// Los obj los puedo imprimir dentro de la etiqueta <pre></pre> y con el método JSON.stringify(obj)

// propiedades = props -> Son enviadas desde el componente padre (<PrimeraApp />) y envio información desde el componente a través de las props.
// Puedo no enviar nada desde el componente padre, y declararlas en el argumento de la función
// Los undefined NO imprimen nada.
// TODOS los componentes reciben props. 
// Para asegurarme que quien use el componente, me brinde las props correctas, se utilizan las PropTypes.
// NombreDelComponente.propTypes = { funcion:PropTypes.valorPrimitivo.isRequired}
// propTypes -> Se utilizan como validadores, es decir, si necesitamos recibir por argumento un string, asegurarnos de que recibamos un string y no un number. PropTypes.string.isRequired
// DefaultProps -> Puedo hacerlo desde los argumentos ó declarandolas por default tal como las propTypes.
// PrimeraApp.defaultProps = { subtitulo: 'Soy un subtitulo'}

import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp = ( {saludo, subtitulo} ) => {
    
    // const saludar = 'Hola Mundox';
    return ( 
        // <pre>{JSON.stringify(saludar, null, 3)}</pre>
        <>
        <h1>{saludo} !!!</h1>
        <p id="paraph">{subtitulo}</p>
        </>

    )
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp