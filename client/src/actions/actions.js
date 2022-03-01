import axios from 'axios';
import { GET_RECIPES } from './constants';

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