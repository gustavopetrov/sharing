class Persona {
    // Constructor -> es un método que se va a ejecutar cuando se inicializa una nueva estancia de persona.

    static _conteo = 0; // ejemplo static
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre); // undefined, solo trabajo con propiedades estáticas(No hay instancia de la misma).
        console.log('Soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        if(!nombre) throw Error('Necesitamos el nombre')
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase

        Persona._conteo++;
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





// spiderman.setComidaFavorita = 'El pie de la tía May'
// console.log(spiderman.getComidaFavorita);

// ironman.miFrase();
// console.log(ironman);
// spiderman.miFrase();
// console.log(spiderman);

console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
Persona.propiedadExterna = 'JavaScript me permite crear propiedades estáticas fuera de la clase';
console.log(Persona.propiedadExterna);
console.log(Persona);



/* 
    El objetivo de las clases, es poder tener propiedades y métodos que sean comunes en todas las instancias de una misma persona( la clase creada )

    Las propiedades estáticas, como los métodos estáticos (static) nos permiten utilizar metodos y propiedades sin necesidad de instanciar la clase.

*/