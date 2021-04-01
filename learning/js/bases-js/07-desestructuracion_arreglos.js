// const personajes = ['Goku','Vegeta','Trunks'];
// Ignora el primero, ignora el segundo, devolveme el tercer personaje.
/*
const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);
*/

//  Tarea
// 1. El primer valor del arr se llamará nombre.
// 2. El segundo valor se llamará setNombre
const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [ nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();