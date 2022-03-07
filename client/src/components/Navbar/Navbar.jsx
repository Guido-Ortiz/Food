import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Select from '../Select/Select';
import s from './Navbar.module.css';

function Navbar({ setCurrentPage }) {

    const recipes = useSelector(state => state.recipes)

    function handleClick(e){
        e.preventDefault()
        window.location.reload() // El metodo location.reload() carga de nuevo la URL actual, como lo hace el boton de Refresh de los navegadores.
    }

    return (
        <div>
            <div className={s.wrapper}>
                <Link to='/form'>
                    <button className={s.btn}>Create new recipe</button>
                </Link>
                <SearchBar />
                <button onClick={e => handleClick(e)} className={s.btn}>RESET</button>
            </div>
            <Select setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Navbar;