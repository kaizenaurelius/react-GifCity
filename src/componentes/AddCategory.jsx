import React from 'react'
import { useState, useEffect } from 'react'


const AddCategory = ( { onNewCategory } ) => {
  
    const [ inputValue, setinputValue ] = useState(' ');  
    

    const onInputChange = ( event ) => {
        setinputValue(event.target.value)
        //console.log(event.target.value )
    }
  
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length < 1) return; //Validando que haya un valor en el input mayor a 1 antes de recargar
        //setCategories((categories) => [ inputValue, ...categories])
        onNewCategory( inputValue.trim() )
        setinputValue('') // Limpiar la caja de texto
    }
    return (
        <form onSubmit={( event ) => onSubmit( event )}>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={ (event) => onInputChange( event )} //Metodo onchage
            />


        </form>
  )


}

export default AddCategory
