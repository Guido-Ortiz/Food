import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';

function Landing() {
    return (
    
        <div className={`${s.fondo} ${s.container}`}>
            <div className={s.flex}>
                <h1 className={s.titulo}>Spoonacular</h1>
                <Link to = '/home' style={{ textDecoration: 'none' }}>
                    <button className={s.btn}>See Recipes</button>
                </Link>
            </div>
        </div>
        
    );
}

export default Landing;