import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getRecipes } from '../../actions/actions';
import Loading from '../Loading/Loading';
import Recipe from '../Recipe/Recipe';

function Recipes() {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.allRecipes)
    const recipes = useSelector(state => state.recipes)
    //console.log(allRecipes)

    useEffect(() => {
        dispatch(getDiets())
        dispatch(getRecipes())
    }, [dispatch])

    if (recipes.length > 0) {
        return(
            <div>
                <div>
                    <p>Recipes found:{recipes.length}</p>
                </div>
                {
                    recipes.map(r => {
                        return (
                            <div>
                                <Recipe id={r.id}
                                        name={r.name}
                                        image={r.image}
                                        diets={r.diets}
                                        score={r.score}
                                        key={r.id} />
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