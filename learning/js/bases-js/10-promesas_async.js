/*
                            Funciones Async.
    Estructura:

    export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else {
        throw Error(`No existe un héroe con el id ${ id }`);
    }

}
    *No trabajan con resolve - reject.
    *Los errores los manejamos con un Throw

*/ 

const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Super soldado'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'filántropo y playboy'
    },
    spider: {
        nombre: 'Spider-Man',
        poder: 'Best reacción alérgica a la picadura de una araña ever'
    }
}

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve,reject)=> {
        if(heroe){
            resolve(heroe);
        }else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    });
}

// Async example
export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else {
        throw `No existe un héroe con el id ${ id }`;
    }

}


const promesaLenta = new Promise( (resolve,reject)=> {
    setTimeout(()=> resolve('Promesa Lenta'),2000)
})
const promesaMedia = new Promise( (resolve,reject)=> {
    setTimeout(()=> resolve('Promesa Media'),1500)
})
const promesaRapida = new Promise( (resolve,reject)=> {
    setTimeout(()=> resolve('Promesa Rápida'),1000)
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}

/*
    Las promesas:
        *sintaxis : New Promise(CB);
        *Recibe callbacks dentro de la promesa.
        *Reciben 2 argumentos opcionales (puedo trabajar con promesas sin argumentos)
        Los argumentos son Resolve y Reject (res,rej)
        Resolve -> resolución de la promesa
        Reject  -> Fallo la promesa (error)
        *Las promesas no son ASINCRONAS
*/