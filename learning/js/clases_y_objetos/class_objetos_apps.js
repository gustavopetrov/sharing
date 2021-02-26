/*
    consignas:
    ---------|
                -Crear un sistema que me permita decidir cual app descargar.
                -La información de los instaladores debe contener la cantidad de descargas y la puntuación total y el peso.
                -Las Apps deben poder ser instaladas / desinstaladas , ser Abiertas / Cerradas.
*/

class apps {
    constructor(descargas,pts,peso){
        this.descargas = descargas;
        this.puntuacion = pts;
        this.peso = peso;
        this.iniciada = false
        this.instalada = false
    }
    instalar(){
        if( this.instalada == false){
            this.instalada = true
            if(this.instalada == true){
            alert("App instalada correctamente")
            }
        }

    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada == false
            alert("App desinstalada correctamente")
        }

    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true
            alert("Abriendo app");
        }else{
            alert("La app no esta pudo abrir");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada correctamente");
        }else{
            alert("¡upss! ocurrió un error inesperado")
        }

    }
    appInfo(){
        return `
            Descargas:<b>${this.descargas}</b><br>
            Puntuación:<b>${this.puntuacion}</b><br>
            Peso:<b>${this.peso}</b><br>
        `
    }
}

app = new apps("16.000","1 estrellas", "550mb");
app2 = new apps("6.000","2 estrellas", "450mb");
app3 = new apps("1.000","3 estrellas", "720mb");
app4 = new apps("100","4 estrellas", "750mb");
app5 = new apps("20.000","5 estrellas", "700mb");
app6 = new apps("100.000","4.5 estrellas", "800mb");
app7 = new apps("7","3.7 estrellas", "900mb");

document.write(`
    ${app.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`)

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();
