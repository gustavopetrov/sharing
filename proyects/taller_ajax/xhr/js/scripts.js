const button = document.getElementById('button')

const makeARequestWithXMLHTTPRequest = () => {
    const xhr = new XMLHttpRequest();
    // primer parámetro: recibe un verbo get-post-put-delete
    // segundo parámetro la URL
    // se abrió la petición

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    
    //ejecutar el evento LOAD luego de abrir la petición (evento propio de XHR)
    // xhr.load()
    
    xhr.addEventListener('load', data => {
        /*
        Dentro del objeto 'data', en la propiedad TARGET, encuentro el atributo RESPONSE
        el cual contiene la información del obj.
        console.log(data);
        Los obj llegan en forma de STRING y deben ser enviados de misma manera.
        */
       console.log(data.target.response);
       const dataJson = JSON.parse(data.target.response)
    })

    xhr.send();
}


button.addEventListener('click', makeARequestWithXMLHTTPRequest);