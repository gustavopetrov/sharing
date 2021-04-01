// Variables y constantes
// (control + espacio) -> sugerencias (shortcut)

const nombre = 'Gustavo';
const apellido = 'Petrov';

let valorDado = 5;
valorDado = 4;

console.log(nombre,apellido,valorDado);

if (true) {
    let valorDado = 6; 
    const nombre = 'Peter' //Esta variable nombre, solo existe dentro del if
    console.log(valorDado, nombre);
}
console.log(valorDado); // dentro del if valorDado vale 6, fuera, sigue valiendo 4, por SCOPE

// Scope 
/*
    El scope de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible. Podríamos decir también que scope es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código.
*/