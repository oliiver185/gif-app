import React, { useState } from 'react';
import PropTypes from 'prop-types'



const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');  //useState() asi es undefined
    
    const handleInputChange = (e) => {
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
          e.preventDefault(); 
          

        if (inputValue.trim().length > 2){
          setCategories(cats => [inputValue, ...cats ]);
          setInputValue('');
        }    

        // inputValue.trim().length > 2 && setCategories(cats => [...cats, inputValue]);
        // inputValue && setCategories( (category) => [...category, inputValue] ); 
    }

    return (       
        <form onSubmit={handleSubmit}>
          <p>{inputValue}</p>
        <input
          type="text"
          value = {inputValue}
          onChange= { handleInputChange}
          placeholder="Type something 😀"
          /> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

// PrimeraApp.propTypes = {
//   saludo: PropTypes.string.isRequired
// //    otra: PropTypes.number.isRequired 
// }
export default AddCategory;