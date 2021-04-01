const getImagen = async () => {
    
    try {

        const apiKey = 'QiwgNklFLbq5rytGbqgKZGOc1IkVfT4G';

        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        // Await -> antes de ejecutar la siguiente línea de código, espera que termine el Fetch
    
        const {data} = await res.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)

    } catch(err) {
        console.error(err);
    }
}
getImagen();