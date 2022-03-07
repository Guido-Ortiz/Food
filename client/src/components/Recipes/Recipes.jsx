import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getRecipes } from '../../actions/actions';
import Loading from '../Loading/Loading';
import Recipe from '../Recipe/Recipe';
import s from './Recipes.module.css';

function Recipes({ recipes }) {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.allRecipes)
    //const recipes = useSelector(state => state.recipes)
    

    useEffect(() => {
        dispatch(getDiets())
        dispatch(getRecipes())
    }, [dispatch])

    if (recipes.length > 0) {
        return(
            <div className={s.recipes}>
                {
                    recipes.map(r => {
                        return (
                            <div key={r.id}>
                                <Recipe id={r.id}
                                        name={r.name}
                                        image={r.image}
                                        diets={r.diets}
                                        score={r.score} />
                            </div>

                        )
                    })                
                }
            </div>
        )
    }

    if (recipes.length === 0 && allRecipes.length === 0) {
        return(
            <div>
                <Loading />
            </div>
        )
    }

    if (recipes.length === 0 && allRecipes.length > 0) {
        return(
            <div>
                <p>Sorry! No matches found...</p>
            </div>
        )
    }
}

export default Recipes;