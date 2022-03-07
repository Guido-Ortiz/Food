import React from 'react';
import s from './Loading.module.css';
import loader from './assets/loading.gif';

function Loading() {
    return (
        <div>
            <img src={loader} className={s.img} alt='img not found'/>
        </div>
    );
}

export default Loading;