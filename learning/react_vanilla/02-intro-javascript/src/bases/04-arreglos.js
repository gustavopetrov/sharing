// Arreglos en JS

// const arreglo = new Array(100);
// Arreglo predefinido con 100 posiciones

    let numbers = [1, 2, 3, 4, 5];
/*
    Array.length -> Devuelve el número de posiciones que contiene el array (tamaño total)
    
    console.log(numbers.length);
*/
/*
    Array.isArray() -> Devuelve true si la variable es un array.


    Eliminar un elemento:
    `````````````````````
    .shift() -> Elimina el primer elemento de un array y devuelve ese elemento.

    .pop() -> Elimina el último elemento de un array y devuelve ese elemento.
    
    let deletedElement = numbers.pop() -> devuelve el último elemento eliminado del array y lo guarda en la variable.


    Añadir elementos:
    `````````````````
    .push(elemento1, elemento2, ...) -> Añade 1 ó más elementos al final del array, y devuelve la nueva longitud.
    
    .unshift(elemento1, elemento2, ...) -> Añade uno o más elementos al comienzo de un array y devuelve la nueva longitud.

    numbers.push(6) -> Nuevo elemento añadido al final del array.
    
    let newLength = numbers.push(6) -> Guardé la nueva longitud del array en la variable declarada

    Buscar elementos:
    `````````````````
    .indexOf(elemento) -> Devuelve el PRIMER índice del elemento que coincide con el valor especificado, ó -1 si ninguno es encontrado.

    .lastIndexOf(elemento) -> Devuelve el ÚLTIMO índice del elemento que coincide con el valor especificado, ó -1 si ninguno es encontrado.


    
    .reverse() -> Invierte el orden de los elementos del array.

    .join(separador) -> Devuelve un string con el separador que indiquemos, por default es , (una coma como separador).
    numbers.join("-") => array de numbers,donde cada elemento es separado por -.




    .splice(a, b, items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
        a       -> Indice de inicio.
        b       -> Número de elementos. (opcional)
        items   -> Elementos a añadir en el caso que se añadan. (opcional)
 */
/*  let numbers = [1, 2, 3, 4, 5]; 
    numbers.splice(3) -> Elimina desde la posición 3 hasta el final
    numbers.splice(2,2) -> Elimina desde la posición 2 sus siguientes 2 elementos ( a -> indice, b -> numero de elementos)
    numbers.splice(2, 0, item) -> agrega los elementos que le indiquemos luego del tercer parámetro. Si B = 0 , B no elimina elementos.

    .slice(a,b) -> Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b, lo hace desde a hasta el final. Si no existe a ni b, hace una copia del original

    let newNumbers = numbers.slice(2,3);
    console.log(numbers);
    console.log(newNumbers);
    (similar a splice)



    .from(iterable) -> Convierte en array a un elemento iterable

    let word = 'Hola mundo'
    console.log(Array.from(word));
    console.log(word.split('')); -Mismo resultado-

    Retorna la palabra dentro de un array, cada letra ocupa una posición.



    .sort([callback]) -> Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback, los ordena en función del algoritmo que le pasemos.

    const letters = ['b','c','z','a','g'];
    console.log(letters.sort());
    
    const numbers = [1,8,100,300,3];
    console.log(
        numbers.sort((a,b)=> a-b)
    );

    De esta forma se ordena un array de mayor a menor.

    Recorre el array de a pares a y b, en la primer vuelta compara el valor a(1) y el valor b(8)
    los casos son :
    (a-b) > 0 => a es mayor que b
    (a-b) = 0 => a y b son iguales
    (a-b) < 0 => a es menor que b

    En función a esta comparación, ordena el array.

    Para ordenar de mayor a menor, el algoritmo NO ES (a+b), es b-a.

    (a,b) => b-a -> Mayor a Menor

    En resumen:
    ```````````
    function menorMayor(a,b) {
        if (a-b < 0) return -1;
        if (a-b > 0) return 1;
        if (a == b ) return 0;
    }

    function mayorMenor(a,b) {
        if (b-a < 0) return -1;
        if (b-a > 0) return 1;
        if (b == a ) return 0;
    }



    .forEach(callback(currentValue, [index])) -> Ejecuta la función indicada una vez por cada elemento del array. (Puede recibir el argumento 'this')

    const numbers = [12,25,47,84,98];
    numbers.forEach((el, index) =>
        console.log(`${el} está en la posición ${index}`));

    Recorro el array, el index sería el índice actual donde se encuentra.



    .some(callback) -> Comprueba si almenos un elemento del array cumple la condición indicada.

    .every(callback) -> Comprueba si todos los elementos del array cumplen la condición indicada.

    const words = ["html", "css","js","php"];

    console.log(
        words.some(word => word.length > 2));
                   ```````````````````````` (callback)
    Retornará true si alguno de los elementos del array tiene una longitud superior a 2, caso contrario false.
    Con el método .every(callback) se trabajará igual, pero la condición la tendrán que cumplir todos los elementos.



    .map(callback) -> transforma todos los elementos del array y devuelve un nuevo array.

    const numbers = [12,25,47,84,98];
    const numbers2 = numbers.map(number =>number*2);
    console.log(numbers2);

    Recorre todo el array y a cada elemento lo multiplica por dos, el resultado se guarda en una variable nueva.

    .filter(callback) -> Filtra todos los elementos del array que cumplan una condición y devuelve un nuevo array.

    const numbers  = [12,25,47,84,98];
    const numbers2 = numbers.filter( number => number > 40 )
    console.log(numbers2);
    
    Recorri el array y lo filtré, solo devuelvo los numeros mayores a 40.

    .reduce(callback) -> Reduce todos los elementos del array a un único valor.
    Recibe 2 parámetros, ya que trabaja con pares (a,b)

    const numbers  = [12,25,47,84,98];
    const numbers2 = numbers.reduce((a,b) => a+b);
    console.log(numbers2);

    Recorre el array, toma pares de números y los suma, devuelve un valor único que va a ser el resultado de la operación.
*/





















// Array  .push() -> Modifica el objeto principal
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// Para insertar elementos a un array se usa spread operator
// [...elemento]  

// const arreglo = [1,2,3,4];
// let arreglo2 = [...arreglo, 5];
// arreglo2.push(5)

/*
    .map() -> 
*/


// const arreglo3 = arreglo2.map();
// console.log(arreglo);
// console.log(arreglo2);