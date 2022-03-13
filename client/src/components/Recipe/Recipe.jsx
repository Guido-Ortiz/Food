import React from 'react';
import { Link } from 'react-router-dom';
import s from './Recipe.module.css';

function Recipe({ id, name, image, score, diets }) {
    return (
        <div className={s.recipe}>
            <img src={image} alt='img not found' className={s.image}/>
            <div className={s.name}>{name}</div>
            <div className={s.diets}>{
                    diets.map(d => d.name.concat(', '))
                }</div>
            <div className={s.score}>{score}</div>
             
            <Link to={`/${id}`}>
                <button className={s.btn}>See more</button>
            </Link>
            
        </div>
    );
}

export default Recipe;