/*
    Método .reduce(a,b)
    ```````````````````
    Es un método que recibe una funcion .reduce(a,b).Trabaja con pares de argumentos, es decir, recibe dos argumentos.
    El primero -> Un valor acumulable
    El segundo -> Elemento iterable
    return -> Nuevo elemento que se está acumulando.

    Tercer Argumento? -> Puede recibir un tercer argumento, el cual sería un inicializador para el acumulador.
    
    La función reduce siempre retornará un valor único.


*/
/*
const users = [
    {
        name:   'user 1',
        online: true
    },
    {
        name:   'user 2',
        online: true
    },
    {
        name:   'user 3',
        online: false
    },
    {
        name:   'user 4',
        online: true
    },
    {
        name:   'user 5',
        online: false
    },
    {
        name:   'user 6',
        online: true
    },
]
cont = contador donde sumo los usuarios online
user = elemento que recorre el array
0 = inicializo el contador en 0 para darle un tipo de dato (number)
const usersOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
}, 0);
console.log(`Hay ${usersOnline} usuarios conectados`)
*/

/*
const reducido = [1,2].reduce((acc,el) => acc + el, 0)
console.log(reducido);
*/

/*
    Así se suma todos los elementos de un arreglo:
    ``````````````````````````````````````````````
const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
console.log(resultado);
*/

/*
    Indexar un arreglo:
    ```````````````````
    Indexado -> Que su índice es el nombre de la mascota.

*/
/*
const mascotas = [
    { nombre: 'Pelusa', edad: 12, especie: 'gato'},
    { nombre: 'Puchini', edad: 12, especie: 'perro'},
    { nombre: 'Pulga', edad: 10, especie: 'perro'},
    { nombre: 'Chanchito Feliz', edad: 12, especie: 'cerdo'},
]

const indexed = mascotas.reduce((acc, el) =>({
    ...acc,
    [el.nombre]: el,


}),{})

console.log(indexed);
*/
/*
const anidado = [1, [2, 3], 4, [5]];
                [1, 2, 3, 4, 5]
const plano = anidado.reduce((acc,el) => acc.concat(el), []);
console.log(plano);
acc -> Es un acumulador que lo inicializo como un arreglo vacío.
Por cada iteración, se van concatenando todos los elementos en un solo arreglo.
*/