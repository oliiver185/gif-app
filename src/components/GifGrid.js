import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

      const {data: images,  loading } = useFetchGifs(category);
     
      
    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([])

    

   

    // getGif();




    return (
<>
        <h3 className="animate__animated animate__fadeIn third-title">{category}</h3>

        {loading && <p className="animate__animated animate__flash">Loading...</p>}

        {/* {loading ? 'cargando' : 'data cargada'}  */}
        <div className="card-grid">
            
            

            {/* en esta parte se puede hacer la desestructuracion de un vez sin necesidad de poner un call
            back como por ejemplo map(imagen => <li key{imagen.id>{imagen.title}</li */}

             {
               images.map(img => (
                   <GifGridItem 
                   key ={img.id}
                    {...img} /> 
                   ))
                   
            }
          
          
        </div> 

        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}