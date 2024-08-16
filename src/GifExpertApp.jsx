import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon ball' ]);

    // console.log(categories);

    const onAddCategory = ( newCategory ) =>{
        console.log(newCategory);
        // categories.push(newCategory);
        
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);

        // setCategories(['Valorant',...categories]);
        // setCategories( cat => [ ...cat,'Valorant' ] );
    }

    return(
        <>            
            <h1>Gif Expert App</h1>
            {/* First component */}
            <AddCategory
                // setCategories={ setCategories }/>
                onNewCategory={ (value) => onAddCategory (value) }
            />
            
            { 
                categories.map( category => (
                    // Second component
                    <GifGrid 
                        key={ category }
                        category={ category } />                            
                ))                        
            }            
        </>      
    )
}