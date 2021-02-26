/*
    consigna 1:
    -----------|
                -Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
                -Cada celular debe tener color, peso, resolución de pandalla, resolución de cámara y memoria ram
                -Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.
*/
class celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido == true;
        } else {
            alert("celular apagado");
            this.encendido == false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Resolución de cámara: <b>${this.resolucionDeCamara}</b> <br>
        Resolución de vídeo: <b>${this.resolucionDePantalla}</b> <br>
        Memoria RAM: <b>${this.memoriaRam}</b> <br>
        `;
    }

}

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

// celular1 = new celulares("rojo","150gr","5'","hd","1GB");
// celular2 = new celulares("negro","155gr","5.4'","full hd","2GB");
// celular3 = new celulares("blanco","150.45gr","5.9'","full hd","2GB");

// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celular2.mobileInfo()} <br>
// ${celular3.mobileInfo()} <br>
// `)

/*
    consigna 2
    ----------|
                Implementar las cualidades de los celulares a los celulares de ALTA GAMA, que ademas tienen cualidades nuevas:
                -Pueden grabar en camara lenta
                -Poseen reconocimiento facial
                -Tienen un cámara extra
 */

 class celularAltaGama extends celulares {
     constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
     }
     grabarVideoLento(){
         alert("Estas grabando en cámara lenta");
     }
     reconocimientoFacial(){
         alert("iniciando reconocimiento facial");
     }
     infoAltaGama(){
         return this.mobileInfo() + `Resolución de cámara extra:${this.resolucionDeCamaraExtra}`;
     }
 }

 celular1 = new celularAltaGama("rojo","130g","5.2","4K","3GB","Full HD")
 celular2 = new celularAltaGama("negro","142g","6","4K","4GB","Full HD")

 document.write(`
 ${celular1.infoAltaGama()} <br>
 <br>
 ${celular2.infoAltaGama()} <br>
 `);

