import axios from 'axios';
import { FILTER_DIET, FILTER_ORIGIN, GET_DETAIL, GET_DIETS, GET_RECIPES, GET_RECIPE_NAME, ORDER_NAME, ORDER_SCORE, RESET_DETAIL } from './constants';

export function getRecipes(){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/recipes`)
            return dispatch({
                type: GET_RECIPES,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function getDiets(){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/types`)
            return dispatch({
                type: GET_DIETS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function resetDetail(){
    return{
        type: RESET_DETAIL
    }
}

export function getRecipeName(name){
    return async function(dispatch){
        try{
            var response = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: GET_RECIPE_NAME,
                payload: response.data // lo que devuelve la ruta de arriba
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function filterOrigin(payload){
    return{
        type: FILTER_ORIGIN,
        payload
    }
}

export function filterDiet(payload){
    return{
        type: FILTER_DIET,
        payload
    }
}

export function orderScore(payload){
    return{
        type: ORDER_SCORE,
        payload
    }
}

export function orderName(payload){
    return{
        type: ORDER_NAME,
        payload
    }
}

export function createRecipe(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/recipe', payload)
        return response
    }
}