import { obtenerChiste } from "./http-provider-chistes";

//  Referencias
const body = document.body;
let btnOtro, olList; // No las declaro , por que aún no esta creado el append en el dom. uso let para poder cambiar a donde apuntan (elementos creados ó que van a ser creados)
//           ---------------------------------------------
const crearChistesHtml = ()=> {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Generar Chistes</button>
    <ol class="mt-2 list-group">
    </ol>    
    `;
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {

    olList  = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async()=>{

        btnOtro.disabled = true;

        dibujarChiste(await obtenerChiste() );

        btnOtro.disabled = false;

        
    });
}

// chiste {id,value}

const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item')

    olList.append(olItem);
}












export const init = () => {
    crearChistesHtml();
    eventos();
}