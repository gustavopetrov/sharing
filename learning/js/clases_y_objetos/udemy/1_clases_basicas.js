class Persona {
    // Es un método que se va a ejecutar cuando se inicializa una nueva estancia de persona.
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        if(!nombre) throw Error('Necesitamos el nombre')
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
    }
}
const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'IronMan', 'Soy IronMan');
console.log(spiderman);
console.log(ironman);

/* 
    El objetivo de las clases, es poder tener propiedades y métodos que sean comunes en todas las instancias de una misma persona( la clase creada )

*/