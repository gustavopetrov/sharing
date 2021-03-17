class Persona {
    // Constructor -> es un método que se va a ejecutar cuando se inicializa una nueva estancia de persona.

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        if(!nombre) throw Error('Necesitamos el nombre')
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
    }

    // Setters y Getters (Set-> usualmente recibe 1 solo argumento)
    // Set -> Establecer un valor
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();

    }
    // Get -> Recuperar / Obtener un valor
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
    // Métodos en clases
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

spiderman.miFrase();
console.log(spiderman);

// ironman.miFrase();
// console.log(ironman);

spiderman.setComidaFavorita = 'El pie de la tía May'
console.log(spiderman.getComidaFavorita);


/* 
    El objetivo de las clases, es poder tener propiedades y métodos que sean comunes en todas las instancias de una misma persona( la clase creada )

*/