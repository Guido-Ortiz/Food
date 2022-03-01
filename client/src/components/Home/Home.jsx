import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Recipes from '../Recipes/Recipes';
import Title from '../Title/Title';

function Home() {

    return (
        <div>
            <Title />
            <Link to='/form'>
                <button>Create new recipe</button>
            </Link>
            <div>
                <Navbar />
            </div>
            <Recipes />
        </div>
    );
}

export default Home