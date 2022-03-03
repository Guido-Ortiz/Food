import axios from 'axios';
import { FILTER_ORIGIN, GET_DETAIL, GET_RECIPES, ORDER_SCORE, RESET_DETAIL } from './constants';

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

export function filterOrigin(payload){
    return{
        type: FILTER_ORIGIN,
        payload
    }
}

export function orderScore(payload){
    return{
        type: ORDER_SCORE,
        payload
    }
}