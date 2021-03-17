import { buscarHeroeAsync, buscarHeroe } from "./promesas_async";

const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map(id => buscarHeroe(id))
// const heroesPromesas = heroesIds.map(buscarHeroe)
// las dos instrucciones hacen lo mismo pero una esta simplificada


export const obtenerHeroesArr = async() => {

    // Todo el código en una línea.. clave!
    // se resuelve desde dentro hacía fuera, como en mates!
    return await Promise.all(heroesIds.map(buscarHeroe))





    // No se recomienda usar await DENTRO de un ciclo FOR
    // 1er manera de resolución
    // const heroesArr = [];

    // for (const id of heroesIds) {     
    //     const heroe = await buscarHeroe(id);
    //     heroesArr.push(heroe);
    // }
    // return heroesArr;
    
    // 2da manera de resolución
    
    // const heroesArr = [];
    // for (const id of heroesIds) {
        
    //     heroesArr.push(buscarHeroe(id)); 
    //     //obtengo un ARREGLO de PROMESAS
    // }
    // // No utilizar AWAIT dentro de un CICLO FOR!
    // return await Promise.all(heroesArr);
}

export const obtenerHeroeAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    }catch( err ){
        console.log('CATCH!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };

    }


}

export const heroesCiclo = async() => {

    console.time('HeroesCiclo');

    for await ( const heroe of heroesPromesas){
        console.log(heroe);
    }

    // const heroes = await Promise.all(heroesPromesas)
    // heroes.forEach(console.log)
    // console.log(heroes);

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async (id)=> {

    if( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos');
    }else {
        console.log('Naaa');
    }
}