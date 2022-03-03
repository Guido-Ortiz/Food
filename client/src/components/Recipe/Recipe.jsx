import React from 'react';
import { Link } from 'react-router-dom';

function Recipe({ id, name, image, diets, score }) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{score}</h5>
            <h5>{
                    diets.map(d => d.name.concat('-'))
                }</h5>
            <img src={image} alt='img not found'/> 
            <Link to={`/${id}`}>
                <button>See more</button>
            </Link>
            
        </div>
    );
}

export default Recipe;