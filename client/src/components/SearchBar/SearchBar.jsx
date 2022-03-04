import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeName } from '../../actions/actions';

function SearchBar() {

    const dispatch = useDispatch()
    const [recipe, setRecipe] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setRecipe(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getRecipeName(recipe))
        setRecipe('')
    }

    return (
        <div>
            <input placeholder='Search recipes...'
                   type='text'
                   value={recipe}
                   onChange={e => handleInputChange(e)}/>
            <button type='submit' onClick={e => handleSubmit(e)}>Search</button>
        </div>
    );
}

export default SearchBar;