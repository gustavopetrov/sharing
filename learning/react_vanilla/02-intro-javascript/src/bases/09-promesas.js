import {getHeroeById} from './bases/08-export-import'
import {heroes} from './data/heroes'

// const promesa = new Promise ( (res,rej) => {
//     const p1 = getHeroeById(2);
//     res(p1);
//     rej('No se pudo encontrar el héroe');
// }, 2000)

// promesa.then((heroe) => {
//     console.log('heroe',heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((res,rej) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if ( p1 ) {
                res( p1 );
            }else {
                rej( ' No se pudo encontrar el Héroe' );
            }
        },2000)
    })
}

getHeroeByIdAsync(5)
// .then(heroe => console.log('Heroe', heroe))
// .catch(err => console.warn('Errrrror!', err))
.then(console.log)
.catch(console.warn)