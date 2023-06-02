import { Fragment, useState, onAddCategory } from "react"
import AddCategory from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";
import 'bootstrap/dist/css/bootstrap.css';



export const GifExpertApp = () => {

    
    const [ categories, setCategories ] = useState([ 'One Punch' ])

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;
        setCategories([newCategory, ...categories])   //puedes elegir donde agregar el new element
        //setCategories(categories.concat(newCategory));
    }
    //console.log(categories);

    return (
        <Fragment>


            <h1 className="title-gifcity"> GifCity </h1>


            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ event => onAddCategory( event )}
            />

            { 
                categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                                
                            />
                    ))
            }


        </Fragment>
    )
}