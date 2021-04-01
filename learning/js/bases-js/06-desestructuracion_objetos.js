/*
    Desestructuración
    `````````````````
    Asignación des-estructurante:
    `````````````````````````````
    const {} = persona; -> Extraer lo que esta dentro de las llaves del objeto PERSONA.

    const {nombre} = persona; -> Extraje la propiedad NOMBRE del OBJETO persona.

    const {nombre:nombre2 -> Renombro la variable si el nombre no esta disponible..
    console.log(nombre2);

    const {nombre, edad, clave} = persona; -> Extraje TODAS las PROPIEDADES el OBJETO persona.
    console.log(nombre, edad, clave);
    Puedo enviar los datos sin necesidad de acceder al obj.

    La des-estructuración se puede utilizar, dentro de las funciones:

    *
    const retornarPersona = (usuario) {
        const {nombre, clave, edad} = usuario
        console.log(nombre, clave, edad);
    }
    *

    Ó también puede ser en los ARGUMENTOS:


    *
    const retornarPersona = ({nombre, edad, clave, rango = 'Capitán}) => {
        console.log(nombre, edad ,clave);
    }
    *
    Si le agrego un nuevo parámetro que NO esta definido, obtengo undefined. Puedo establecerlo en los argumentos indicando que RANGO = Capitán.
    Sin embargo, si luego lo defino: Rango = Soldado;
    Retornaré el valor de Soldado, el que esta DEFINIDO en el obj.

*/

// const retornarPersona = (usuario) => {
    //     console.log(nombre, edad, clave);
    // }
    // retornarPersona( persona )
    // console.log(persona.nombre);
    // console.log(persona.edad);
    // console.log(persona.clave);
    
// const {nombre, edad, clave, rango} = persona;

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
}

const useContext = ({nombre, edad, clave, rango}) => {
    return {
        nombreClave: clave,
        age: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        }
    }
}

// const avenger = useContext( persona ) -> Cómo extraer de avenger, el nombreClave y los años (age), como lo hago? nuevamente utilizando la asignación des-estructurante..
const {nombreClave, age, latlng:{lat, lng}} = useContext( persona );
// En caso de tener obj anidados, tengo que pasar por parámetro el obj que los albergue y otra vez utilizar la asignación desestructurante latlng:{lat, lng}.. AHORA los parámetros que envio son el nombre de la propiedad respectivamente, latitud y longitud..

console.log(nombreClave, age, lat, lng);