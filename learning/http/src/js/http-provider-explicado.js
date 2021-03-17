const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then(res => {
//                     res.json()
//               .then(({id,value}) => {
//                     console.log(id);
//                     console.log(value);
//               })
// })

fetch(jokeUrl).then( res=> res.json())
              .then(({id,value}) => {
                    console.log(id,value);
            })





/*
    Mensajes tipo 200 -> No hubo errores, todo OK
    Mensajes tipo 400 -> Error - No se encontro el recurso(Peticiones erradas, el error es del lado del desarrollador)
    Mensajes tipo 500 -> Error - Errores del lado del servidor, ajenos a los desarrolladores.

*/