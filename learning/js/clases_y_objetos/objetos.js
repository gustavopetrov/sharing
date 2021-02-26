// Esto es un constructor
class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;

    }
    verInfo() {
        document.write(this.info + "<br>")
        
    }
}
//Esto es una herencia
class dog extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        // this.raza = raza;
        this.raza = null;
    }
    // esto es un setter (un método)
    set setModificarRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
    // ladrar(){
    //     alert("¡WAW!");
    // }

    // Esto es un método estático
    // static ladrar(){
    //     alert("¡WAW!");
    // }
}
// const perro_herencia = new dog("perro",5,"marron","callejero");
// perro_herencia.ladrar();

// llamo al método estático ladrar, referenciandolo por la clase dog
// dog.ladrar();

// instancio el obj
const perro = new dog("perro",2,"blanco","callejero")
// el método setter se convierte en propiedad
perro.setModificarRaza = "cocker"
document.write(perro.raza + "<br>");
document.write(perro.getRaza);

// const perro = new animal("perro",5,"marron");
// const gato = new animal("gato",2,"negro");
// const pajaro = new animal("pajaro",1,"verde");

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")