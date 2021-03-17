const jokeUrl = 'https://api.chucknorris.io/jokes/random';


export const obtenerChiste = async() => {
    try{
        
        const respuesta = await fetch(jokeUrl);
     
        if(!respuesta.ok) throw 'No se pudo realizar la petición'

        const {icon_url, id, value} = await respuesta.json(); 

        return {icon_url, id, value}

    }catch (err){

        throw err

    }

}


/*

Deconstructing con los valores que necesito y luego los retorno, recordar que son pares de valores iguales..
 icon_url : icon_url
 ````````
 puedo remplazar el primer icon_url por cualquier cosa ya que es el nombre de la variable que se le asigna el valor icon_url (derecha)

 datos: icon_url

 son dos expresiones equivalentes.
*/

















