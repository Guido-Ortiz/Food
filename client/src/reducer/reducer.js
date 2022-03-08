import { CREATE_RECIPE, FILTER_DIET, FILTER_ORIGIN, GET_DETAIL, GET_DIETS, GET_RECIPES, GET_RECIPE_NAME, ORDER_NAME, ORDER_SCORE, RESET_DETAIL } from "../actions/constants";

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
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

        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }

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

        case GET_RECIPE_NAME:
            return{
                ...state,
                recipes: action.payload
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

        case FILTER_DIET:
            const all = state.allRecipes
            const dietsFilter = action.payload === 'all' ? all : all.filter(v => v.diets.find(g => g.name === action.payload))
            return {
                ...state,
                recipes: [...dietsFilter],
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

        case ORDER_NAME:
            let orderName = [...state.allRecipes]
            if (action.payload === 'none') {
                return {
                    ...state,
                    recipes: [...state.allRecipes]
                }
            }
            if (action.payload === 'za') {
                return {
                    ...state,
                    recipes: orderName.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1
                        }
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1
                        }
                        return 0
                    })
                }
            }
            if (action.payload === 'az') {
                return {
                    ...state,
                    recipes: orderName.sort(function (a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        }
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1
                        }
                        return 0
                    })
                }
            }

        case CREATE_RECIPE:
            return{
                ...state
            }


        default:
            return state
        //break;
    }
}
export default rootReducer