import React from 'react';

function Pagination({ recipesPerPage, recipes, paginate }) {

    const pageNumber = []

    for(var i = 1; i <= Math.ceil(recipes/recipesPerPage); i++){
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul>
                {
                    pageNumber && pageNumber.map(n => (
                        <li key={n}>
                            <button onClick={() => paginate(n)}>{n}</button>
                        </li> 
                    ))
                }
            </ul>
        </nav>
    );
}

export default Pagination;