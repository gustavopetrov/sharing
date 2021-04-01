/*
        Spread Operator
        ```````````````
        Enviar elementos de un arreglo a una función*/
        
        const addNumbers = (a,b,c) => {
            // console.log(a+b+c)

            
        }
        // console.log(addNumbers(1,2,3));
/*      Retorna 6 en consola
        Declaro un array:
        `````````````````
*/      let numbersToAdd = [1,2,3];

/*
        Si en la función addNumbers le paso por parámetro el nuevo array (numbersToAdd)-> solo cuenta como el primer parámetro,
        faltaria aún el B y el C
        
*/      addNumbers(...numbersToAdd);

/*
        Añadir un array a otro array:
        `````````````````````````````
        Hay dos arrays, en el primero están los usuarios registrados, y en el segundo array los usuarios que se acaban de registrar.
*/      let users    = ['Jose','Martín','Miguel','Juan','Lucía','Ludmila'];
        // console.log(users);
        let newUsers = ['Julio','Gustavo','Gastón'];

        users.push(...newUsers);
        // console.log(users);
/*
        Se puede usar con otros métodos como .splice(...newUsers) ó .push(...newUsers)
*/

/*  Copiar Arrays:
    ``````````````
*/  let array1 = [1,2,3,4];
    console.log(array1);
    let array2 = [...array1];
    console.log(array2);
/*  
    Concatenar Arrays:
    ``````````````````
*/  let arr1   = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8];
    let arrConcat = [...arr1, ...arr2];
    console.log(arrConcat);
/*
    Enviar un número indefinido de argumentos a una función(parámetros REST)
*/  const restParms = (...numbers) => {
    console.log(numbers);
}
    restParms(1,2,3,4,5);
/*  Libreria Math:
    ``````````````
    Averiguar el número máximo de un array de numeros:
*/  const numbers = [-12, 2, 3, 23, 43, 2, 3];
    console.log(Math.max(...numbers));
    console.log(Math.min(...numbers));
/*  Eliminar elementos duplicados:
    ``````````````````````````````
    new Set -> no permite elementos duplicados, pero guarda su valor dentro del objeto SET
*/  console.log(new Set(numbers));
    console.log([...new Set(numbers)]);
/*  
    Guardar el resultado en un array nuevo SIN elementos duplicados.
*/