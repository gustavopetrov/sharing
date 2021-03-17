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

/* 
    El objetivo de las clases, es poder tener propiedades y métodos que sean comunes en todas las instancias de una misma persona( la clase creada )

    Las propiedades estáticas, como los métodos estáticos (static) nos permiten utilizar metodos y propiedades sin necesidad de instanciar la clase.

*/

// Herencia

class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase){ 
        // si necesito trabajar con parámetros de la clase anterior (incluso si quiero usar this) debo declarar primero el prefijo SUPER con los args respectivos.
        super(nombre, codigo, frase);
        this.clan = 'Avengers'
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        // Si necesito acceder al método de la clase padre, utilizo el prefijo super
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy su amigable vecino Spiderman');
console.log(spiderman);
spiderman.quienSoy();

/*
    Herencia -> Extends [Poder extender una clase]
    Propiedades que voy a necesitar en otra clase
*/