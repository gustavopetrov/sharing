import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
// {useState, useEffect}

// Colección de elementos que coincidan con la categoría


export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );
    
    // const [images, setImages] = useState([])

    // useEffect(()=> {
    //     getGif( category )
    //     .then( imgs => setImages(imgs))
    // }, [ category ])
    
    // El segundo parámetro del useEffect es un arreglo de dependencia, y evita que se dispare cada vez que hago click en el botón (que se renderice una sola vez el componente getGif)




    return (
        <>
        
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
            
                {
                    images.map( gif => (

                        <GifGridItem 
                        key={gif.id}
                        {...gif}
                        
                        />
                    ))
                }
        </div>
        </>
    )
}
