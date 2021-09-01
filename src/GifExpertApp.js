import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = ({defaultCategories= []}) => {

    

const [categories, setCategories] = useState(defaultCategories);
   
    
    
    return (
    <>
        <div className="container">
             <h2 className="titulo">GifExpertApp<br/><span className="titulo-dos">Look for your favorite Gif on our website!</span></h2>
             {/* <h2 className="titulo-dos"></h2> */}
            
            <AddCategory setCategories= {setCategories} />

       </div>
          
        
           

        <ol className="grid-body">
            {
                categories.map( category =>
                <GifGrid key={category} category= {category} />              
                )
            }
        </ol>

        <footer>
            <div className="footer-container">
               
                <p> &copy; 2021 Oliver Petzey</p>
           
            </div>
        </footer>

    </>
    )
}



// export default GifExpertApp;