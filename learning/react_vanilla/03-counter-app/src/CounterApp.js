import React, {useState} from 'react';
import PropTypes from 'prop-types'


const CounterApp = ({value}) => {

    // const state = useState('Goku');
    // const [nombre, setNombre] = useState('Goku');
    // console.log(nombre, setNombre);

    /*
        El useState retorna un arreglo con 2 valores.
        El primer valor, en la posición 0 es una variable.
        El segundo valor, en la posición 1 es una función
    */
    const [counter, setCounter] = useState(value);


    



    // console.log(state);
    // console.log(state[1]());

    // handle
    const handleAdd = ()=> {
        // setCounter( (counter) => counter + 1 );
        setCounter( counter + 1);
    }
    const handleSubstract = () => {
        setCounter( counter - 1);
    }

    const handleReset = () => setCounter( value )

    


    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubstract }>-1</button>
        </>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
export default CounterApp

/*
Si le pongo () al final de la función que paso por referencia en el evento onclick, apenas cargue el componente se va a ejecutar.. retornará undefined si no pongo un return, Y ESTE RETURN deberá retornar una FUNCIÓN, caso contrario dará error.
Si no coloco los parentesis, se ejecutara al dar click.


ejemplo:

handleAdd:
``````````
const handleAdd = (e) => {
    return () => console.log('Hola Mundo);
}
        <>
    <button onClick={ handleAdd() }>+1</button>
        </>

Cada vez que se carge el componente ejecutara el console.log.


handleAdd:
``````````

    const handleAdd = (e)=> {
        console.log(e);
    }

        <>
    <button onClick={ handleAdd }>+1</button>
        </>


    De esta manera solo se ejecutará cuando hagamos click en el botón.
*/

/*
    Hooks:
    ``````
    useState() retorna un arreglo, en el caso del ejemplo de 2 posiciones.

    La posición 0 recibe una variable.

    La posición 1 recibe una función, que se la define con el prefijo SET
    
    En este caso:
    `````````````

    En la posición 0 - primer valor - llamé a la variable nombre.

    En la posición 1 -segundo valor- llame a la función setNombre.

*/