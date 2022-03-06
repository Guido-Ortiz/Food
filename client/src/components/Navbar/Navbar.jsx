import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import Select from '../Select/Select';

function Navbar({ setCurrentPage }) {

    const recipes = useSelector(state => state.recipes)

    function handleClick(e){
        e.preventDefault()
        window.location.reload() // El metodo location.reload() carga de nuevo la URL actual, como lo hace el boton de Refresh de los navegadores.
    }

    return (
        <div>
            <SearchBar />
            <button onClick={e => handleClick(e)}>RESET</button>
            <Select setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Navbar;