import React from 'react';
import { Link } from 'react-router-dom';
import s from './Recipe.module.css';

function Recipe({ id, name, image, diets, score }) {
    return (
        <div className={s.recipe}>
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