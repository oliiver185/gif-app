import { useEffect, useState } from "react"
import {getGif} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });


   useEffect(() => {
    
    getGif( category).then(img => {
        
        // setTimeout(() => {

            // console.log(img)
            setState({
                data: img,
                loading: false
            })
        // }, 3000);
        
        
        
    })

   },[category])

    // setTimeout(() => {
    //     setState({
    //         data:[1,2,3,4,5],
    //         loading: false
    //     })
    // }, 3000)

    return state;
}
