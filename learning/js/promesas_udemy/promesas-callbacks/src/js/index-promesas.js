import {buscarHeroe as buscarHeroeCallback} from './js/callbacks.js';
import {buscarHeroe} from './js/promesas.js';
import './styles.css';

const heroeId1 = 'capi'; // capi2 para forzar error.
const heroeId2 = 'iron';
const heroeId3 = 'spider';

/*                     
                                                                CallbackHell
*/ 

// buscarHeroe(heroeId1, (err, heroe1) => {
//     if (err) { return console.error(err);}

//     buscarHeroe( heroeId2, (err,heroe2) => {
//         if (err) { return console.error(err);}
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);

//         buscarHeroe( heroeId3, (err,heroe3) => {
//             if (err) { return console.error(err);}
            
            
            
            
//             // console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//         })
//     })

// })

/* 
    conforme voy necesitando más callbacks (peticiones que requieran un callback como respuesta), voy anidando funciones .. Esto se denomina callback hell yes algo que se debe evitar.
*/

/*
                                                                Promises
*/

// buscarHeroe(heroeId1).then(heroe=> {
    //     console.log(`enviando a ${heroe.nombre} a la misión`);
    // })
    
    
    /*
                                                                Promise.all
    */

    // Tengo el mismo problema del callback hell..

//    buscarHeroe(heroeId1).then(heroe1=> {
//         buscarHeroe(heroeId2).then(heroe2 => {console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);})})


Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
        .then( ([heroe1, heroe2]) => {
            console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión.`);

        //  deconstructing array en promesas.
}).catch(err => {
    
    alert(err)

}).finally(()=> {
    console.log('Se termino el promise.all');
})

/*
    Promise.all -> Recibe un array con obj que es capaz de resolver (independientemente del resultado res ó rej)
    Catch -> Se utiliza para "atajar" errores, cuando hay un error esta instrucción lo ATRAPA y detiene el código del programa.
    (detiene la ejecución completamente)

*/
    
    
    console.log('fin de programa');