import { GET_RECIPES } from "../actions/constants";

const initialState = {
    recipes: [],
    allRecipes: [],
    details: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}
export default rootReducer