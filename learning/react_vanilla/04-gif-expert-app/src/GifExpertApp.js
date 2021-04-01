import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <ol>
                {categories.map( (category) => 
                
                <GifGrid 
                key = { category}
                category = {category} />
                )}
            </ol>
            <hr />
        </>
    )
}

/*
Las key sirven para que react sepa que elementos esta iterando, NO SE UTILIZA EL ÍNDICE PARA ITERAR, ES MUY VOLATIL Y PUEDE TRAER ERRORES AL MUTAR EL ARREGLO.
Cada key debe ser único
*/
/*
    OBS:
    ````
    Si quiero manejar el arreglo de categorias, para agregar o eliminar elementos, no voy a poder hacerlo por que es una constante, y no tengo que mutar constantes.
    ¿Cómo le digo a react que hubo un cambio en las categorias y que vuelva a renderizar ese componente?
    
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; 
    

    const handleAdd = () => {

        setCategories([...categories,'SAO'])
        setCategories(categorias => ['SAO',...categorias])


    }
*/