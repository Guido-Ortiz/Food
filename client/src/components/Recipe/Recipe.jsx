import React from 'react';
import { Link } from 'react-router-dom';

function Recipe({ id, name, image, diets }) {
    return (
        <div>
            <h3>{name}</h3>
            <Link to={`/${id}`}>
                <button>See more</button>
            </Link>
            
        </div>
    );
}

export default Recipe;