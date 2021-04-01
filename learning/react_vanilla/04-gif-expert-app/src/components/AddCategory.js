import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    // useState siempre necesita recibir un argumento, o retornará undefined y producirá errores.

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length>0){
            
            setCategories(category => [inputValue, ...category])
            setInputValue('');
        }
        


        // console.log('Submit hecho');
    }
    
    
    return (
            <form onSubmit = {handleSubmit}>

            <input 
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
            />

            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
