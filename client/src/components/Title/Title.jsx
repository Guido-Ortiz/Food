import React from 'react';
import { Link } from 'react-router-dom';
import s from './Title.module.css';

function Title() {
    return (
        <Link to='/home' style={{ textDecoration: 'none' }}>
            <div className={s.title}>
                Spoonacular
            </div>
        </Link>
        
    );
}

export default Title
