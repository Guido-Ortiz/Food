import { GET_DETAIL, GET_RECIPES, RESET_DETAIL } from "../actions/constants";

const initialState = {
    recipes: [],
    allRecipes: [],
    detail: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
            //break;

        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }

        case RESET_DETAIL:
            return{
                ...state,
                detail: null
            }
    
        default:
            return state
            //break;
    }
}
export default rootReducer