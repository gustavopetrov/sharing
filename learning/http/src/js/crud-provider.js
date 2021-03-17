const urlCrud = 'https://reqres.in/api/users' //EndPoint

// obtener usuario:
const getUsuario = async(id)=> {
    
    const respuesta = await fetch(`${urlCrud}/${id}`);
    const {data} = await respuesta.json();

    return data
}

// Create usuario
// Petición POST, Response 201.
const crearUsuario = async(usuario)=> {
    const respuesta = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify( usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await respuesta.json()
}

// Update usuario (actualizar)
// Petición PUT, responde 200.

const actualizarUsuario = async(id,usuario)=> {

    const respuesta = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await respuesta.json()
}

// Delete usuario (borrar)
// Petición DELETE, response 204.

const borrarUsuario = async(id) => {

    const respuesta = await fetch(`${urlCrud}/${id}`,{

        method: 'DELETE',
    });

    return (respuesta.ok) ? 'Borrado' : 'No se pudo eliminar'
}


export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}