import {heroes} from '../data/heroes'

export const getHeroeById = (id) => {
    return heroes.find((el)=> el.id === id);
}

// console.log(getHeroeById(2));

// const getHeroesByOwner = (owner) => {
//     return heroes.filter((heroe) => heroe.owner === owner)
// }
// console.log(getHeroesByOwner('DC'));

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe)=> heroe.owner === owner);
}
console.log(getHeroesByOwner('DC'));