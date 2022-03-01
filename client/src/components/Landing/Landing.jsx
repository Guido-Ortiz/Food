import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h2>landing..</h2>
            <Link to='/home'>
                <button>ingresar</button>
            </Link>
            
        </div>

    );
}

export default Landing;