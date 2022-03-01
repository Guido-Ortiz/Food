import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/actions';
import Recipe from '../Recipe/Recipe';

function Recipes() {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.allRecipes)
    //console.log(allRecipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <div>
            {
                allRecipes.map(r => {
                    return(
                        <div>
                            <Recipe id={r.id}
                                    name={r.name}
                                    image={r.image}
                                    diets={r.diets} />
                        </div>
                          
                    )
                })
            }
            <h1>ACA LISTO TODAS LAS RECETAS</h1>
        </div>
    );
}

export default Recipes;