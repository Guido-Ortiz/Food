import { FILTER_ORIGIN, GET_DETAIL, GET_RECIPES, ORDER_SCORE, RESET_DETAIL } from "../actions/constants";

const initialState = {
    recipes: [],
    allRecipes: [],
    detail: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        //break;

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case RESET_DETAIL:
            return {
                ...state,
                detail: null
            }

        case FILTER_ORIGIN:
            let filter = []
            if (action.payload === 'all') {
                filter = state.allRecipes
            }
            else {
                if (action.payload === 'db') {
                    filter = state.allRecipes.filter(e => e.createdInDb === true)
                }
                else {
                    filter = state.allRecipes.filter(e => !e.createdInDb)
                }
            }
            return {
                ...state,
                recipes: filter
            }

        case ORDER_SCORE:
            let orderScore = [...state.allRecipes]
            if (action.payload === 'none') {
                return {
                    ...state,
                    recipes: [...state.allRecipes]
                }
            }
            if (action.payload === 'score_des') {
                return {
                    ...state,
                    recipes: orderScore.sort(function (a, b) {
                        if (a.score < b.score) {
                            return 1
                        }
                        if (a.score > b.score) {
                            return -1
                        }
                        return 0
                    })
                }
            }
            if (action.payload === 'score_asc') {
                return {
                    ...state,
                    recipes: orderScore.sort(function (a, b) {
                        if (a.score > b.score) {
                            return 1
                        }
                        if (a.score < b.score) {
                            return -1
                        }
                        return 0
                    })
                }
            }


        default:
            return state
        //break;
    }
}
export default rootReducer