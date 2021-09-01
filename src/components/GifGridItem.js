import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({title, url}) => {
    
    // console.log({id, title, url})
    return (
        <div className="card animate__animated animate__fadeIn">
           <img src={url} alt={title}  />

           

           <div className="hover-galeria">
               <a href={url}><p>{title}</p></a>
           </div>
           
        </div>
    )
}


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


/*

1.enzyne
2. enzyme to json
3. deve de mostrar el componente correctamente 

*shallow
*wrapper
*wrapper .tomatchSnapshot()


*/