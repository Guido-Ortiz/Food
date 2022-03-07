import React from 'react';
import s from './Pagination.module.css'

function Pagination({ recipesPerPage, recipes, paginate }) {

    const pageNumber = []

    for(var i = 1; i <= Math.ceil(recipes/recipesPerPage); i++){
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className={s.paginado}>
                {
                    pageNumber && pageNumber.map(n => (
                        <li key={n} className={s.lista}>
                            <button className={s.btn} onClick={() => paginate(n)}>{n}</button>
                        </li> 
                    ))
                }
            </ul>
        </nav>
    );
}

export default Pagination;