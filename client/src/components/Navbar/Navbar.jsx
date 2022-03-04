import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import Select from '../Select/Select';

function Navbar() {

    const recipes = useSelector(state => state.recipes)
    return (
        <div>
            <SearchBar />
            <Select />
        </div>
    )
}

export default Navbar;