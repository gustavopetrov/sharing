// Funciones en JS

// const saludar = function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }
// console.log(saludar);


// const saludar2 = (nombre) => {
//     return `Hola, ${nombre}`;
// }
const saludar2 = (nombre) => `Hola, ${nombre}`;
// Cuando lo único que retorna una función es un RETURN, se puede simplificar así.. Forma IMPLICITA.
const saludar3 = () => `Hola mundo`;
console.log(saludar2('Guri'));
console.log(saludar3());

const getUser = () => {
    return {
        uid: 'abc123',
        username: 'El_papi1105',
    }
}
// Enviar un obj con arrow function
const getUser2 = () => ({
    uid: 'def456',
    username: 'El_papurrix',
})
console.log(getUser());
console.log(getUser2());

// Tarea:
// 1. Transformar a una función de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas / Testing
// function getUsuarioActivo ( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre,
    }
);



const usuarioActivo = getUsuarioActivo('Guri')
console.log(usuarioActivo);

