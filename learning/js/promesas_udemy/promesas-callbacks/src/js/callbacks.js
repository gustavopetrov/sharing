const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Super soldado'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'filántropo y playboy'
    },
    spider: {
        nombre: 'Spider-Man',
        poder: 'Best reacción alérgica a la picadura de una araña ever'
    }
}

export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if (heroe) {
        callback(null,heroe)

    } else {
        // hubo un error 
        callback(`No existe un héroe con el id ${id}`)
    }


}

/*
    Los callback reciben dos parámetros.
    El 1er parámetro es el error y el segundo un obj.
    *   En caso de que la condición SI se cumpla, como primer parámetro, envio un NULL indicando que NO hay errores, y como segundo parámetro el obj.
    
    *   En caso de que la condición NO se cumpla, puedo enviar un mensaje de error, en este caso con el ID enviado.
 */