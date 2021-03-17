class Persona {
    // Constructor -> es un método que se va a ejecutar cuando se inicializa una nueva estancia de persona.
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        if(!nombre) throw Error('Necesitamos el nombre')
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
    }
    // Los métodos se acostumbran a ubicarlos luego del constructor
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}



const spiderman = new Persona('Peter Parker', 'Spider-Man', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Iron-Man', 'Yo soy IronMan');
// console.log(spiderman);
// console.log(ironman);

spiderman.miFrase();
ironman.miFrase();

/* 
    El objetivo de las clases, es poder tener propiedades y métodos que sean comunes en todas las instancias de una misma persona( la clase creada )

*/