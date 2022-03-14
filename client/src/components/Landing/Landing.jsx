import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';
import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';

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