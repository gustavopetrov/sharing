



const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.32142,
        lng: 34.91780,
    }
};

console.log({persona});




/*
    Con esto, no estoy clonando el obj persona -> persona2
    Lo que sucede al realizar una asignación de esta manera, es que copiamos la REFERENCIA al espacio en memoria de la variable persona. (Falso positivo)

    const persona2 = persona;
    persona2.nombre = 'Peter'
    console.log(persona);
    console.log(persona2);

*/



const persona2 = {...persona};
console.log({persona2});
/*
    el operador spread me permite extraer todas las propiedades y asignarselas al nuevo obj que quiero crear ( entre llaves )
*/

/*
    Creo un nuevo obj llamado persona y le asigno el valor persona (mi obj declarado más arriba)
    desde ecmascript 6, cuando nuestra propiedad tiene el mismo nombre que el valor del objeto se puede omitir

    {persona:persona} -> {persona}
*/