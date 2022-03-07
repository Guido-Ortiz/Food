import React from 'react';
import { Link } from 'react-router-dom';
import s from './Recipe.module.css';

function Recipe({ id, name, image, diets }) {
    return (
        <div className={s.recipe}>
            <img src={image} alt='img not found' className={s.image}/>
            <h3 className={s.name}>{name}</h3>
            {/* <h5>{score}</h5> */}
            <h5 className={s.diets}>{
                    diets.map(d => d.name.concat(', '))
                }</h5>
             
            <Link to={`/${id}`}>
                <button className={s.btn}>See more</button>
            </Link>
            
        </div>
    );
}

export default Recipe;