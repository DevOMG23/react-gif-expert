import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {      

    const { images, isLoading } = useFetchGifs( category );   

    console.log( {isLoading} );

    return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }
        {/* images.map */}
        {/*  ordered list */}
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                    // <li key={ id }>{ title }</li>// list Item
                ))
            }
            
        </div>
    </>
  )
}