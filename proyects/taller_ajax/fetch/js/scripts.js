/*  Una promise (promesa), es un objeto que representa la resolución (resolve)
    ó el fracaso (reject) de una operación asíncrona.
    promise.resolve -> Siempre retorna resolve (true)
    promise.reject -> siempre retorna reject (false)
    siempre que haya un error, detiene el flujo de ejecución y lo cambia hacía un
    .catch para hacer un throw del error..

    El método .then() se utiliza para resolver el contenido de una promesa, ya que
    estas devuelven la información encapsulada.
    El método .catch() se utiliza para atrapar los errores.
*/


const button = document.getElementById('button')
const alertElement = document.getElementById('alert');
const responseElement = document.getElementById('response')

/*  SIN AWAIT / ASYNC
        const makeRquestWithFetch = () => {
            // si no aclaro un método, se asume que utilizo GET
            const request = fetch('https://jsonplaceholder.typicode.com/todos/1')
            // Las promesas siempre devuelven información encapsulada
            request
                // .then(res => console.log(res.json()))
                .then( res => {
                    return res.ok ? res.json() : console.log('err');
                })
                .then(data => console.log(data))

        }

            button.addEventListener('click', makeRquestWithFetch)
*/


// CON AWAIT / ASYNC
/*
        Tenemos un request que hace una petición, luego de ejecutarse, const request = fetch('https://jsonplaceholder.typicode.com/todos/1')
        nos llega una respuesta y tenemos que convertirla a .json() =  .then( res => {return res.ok ? res.json() : console.log('err') })
        Esto se soluciona indicandole a la función que es async.
        Luego, ya podemos usar await en aquellos puntos que necesitamos frenar el código
        o crear puntos de interrupción para ejecutarse.
        Ej: La ejecución async del request tardara un tiempo en ejecutarse.
*/
const makeRquestWithFetch = async () => {
    try {
    const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await request.json();
    // request guarda la respuesta cuando termine
    responseElement.textContent =  `el título es:${data.title}`;
    console.log(data);
    } catch(err) {
        alertElement.textContent = 'Err!';
        // MUY IMPORTANTE!!
        // tengo que darle la clase desde js, si no, no funciona
        // no se por qué, si le doy class='alert' desde html
        // NO funciona, ambas clases se las doy y quito acá.
        alertElement.classList.add('alert','alert--error');
        console.log('ERROR!!')
    }
}
button.addEventListener('click', makeRquestWithFetch)


alertElement.addEventListener('animationend', () => {
    alertElement.textContent = '';
    alertElement.classList.remove('alert','alert--error');
})

//bloque try {intenta hacer algo} catch{log al error}