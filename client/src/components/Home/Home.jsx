import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Pagination from '../Pagination/Pagination';
import Recipes from '../Recipes/Recipes';
import Title from '../Title/Title';
import s from './Home.module.css';

function Home() {

    //const allRecipes = useSelector(state => state.allRecipes)
    const recipes = useSelector(state => state.recipes)

    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    window.scrollTo(0, 0)

    return (
        <div>
            <Title />
            <div className={s.home}>
                <div>
                    <Navbar setCurrentPage={setCurrentPage} />
                </div>
                
                <Recipes recipes={currentRecipes}/>

                <div>
                    <Pagination recipesPerPage={recipesPerPage}
                                recipes={recipes.length}
                                paginate={paginate}/>
            </div>
            
        </div>
        </div>
        
    );
}

export default Home