// import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas.js';

import {buscarHeroe, buscarHeroeAsync} from './js/promesas_async'

buscarHeroe('capi2')
                    .then(console.log)
                    .catch(console.warn)
buscarHeroeAsync('iron2')
                    .then(console.log)
                    .catch(console.warn)

// promesaLenta.then(mensaje => console.log(mensaje));
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

/*
    Promise.race permite ejecutar las promesas, todas en conjunto, y obtener el valor de la promesa que se resolvió primero..
    Recibe como argumento un array con promesas (obj también, pero se utiliza para promesas.)

    Este método ignora errores, no detiene el flujo de ejecución (promesaMedia recibe reject y se ejecuta igual)

    A la hora de utilizar el catch, si la promesa que se resuelva primero, tiene un error, es lo que atajará el CATCH, no la media ni la lenta, trabaja con la que se resolvió primero SIEMPRE.
*/

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
//             .then(console.log)
//             .catch(console.warn)


