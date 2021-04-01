




export const getGif = async( category ) => {

    // encodeURI -> arregla espacios en blanco.
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=7&api_key=QiwgNklFLbq5rytGbqgKZGOc1IkVfT4G`;
    const respuesta = await fetch( url );
    // Optimizar - deconstruct 
    // const data = await respuesta.json();
    const { data } = await respuesta.json();
    // Recorro el array para atrapar las propiedades que me interesan de cada elemento ( imagen )
    const gif = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // Regresa una PROMESA que resuelve la colección de imagenes
    return gif;
}