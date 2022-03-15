const { Router } = require("express");
const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");
const recipeDb = require("./utils/recipeDb");
const { API_KEY,  API_KEY_1, API_KEY_2} = process.env;

const router = Router();

router.get('/', async (req, res) => {

    try {

        const { name } = req.query

        if (!name) {
            // consulto a la api
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
            
            //console.log(response.data.results)
            const recipesApi = response.data?.results.map(e => {
                return {
                    id: e.id,
                    name: e.title,
                    summary: e.summary,
                    score: e.spoonacularScore,
                    healthScore: e.healthScore,
                    analyzedInstructions: e.analyzedInstructions[0]?.steps.map(e => {
                        return e.step
                    }
                    ),
                    image: e.image,
                    diets: e.diets.map(d => {
                        return {
                            name: d
                        }
                    })
                }
            })

            // consulto a la db
            const dbResponse = await Recipe.findAll({
                include: {
                    model: Diet,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
            })

            const allRecipes = dbResponse.concat(recipesApi)

            res.send(allRecipes)
        }
        else {
            // tengo name por query -- lo busco en la api y en la bd
            // consulto a la api
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
            
            //console.log(response.data.results)
            const recipesApi = response.data?.results.map(e => {
                return {
                    id: e.id,
                    name: e.title,
                    summary: e.summary,
                    score: e.spoonacularScore,
                    healthScore: e.healthScore,
                    analyzedInstructions: e.analyzedInstructions[0]?.steps.map(e => {
                        return e.step
                    }),
                    image: e.image,
                    diets: e.diets.map(d => {
                        return {
                            name: d
                        }
                    })                  
                }
            })

            // consulto a la db
            const dbResponse = await Recipe.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: {
                    model: Diet,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
            })

            const allRecipes = dbResponse.concat(recipesApi)

            const recipes = allRecipes.filter(r => r.name.toLowerCase().includes(name.toString().toLowerCase()))
            if (recipes) {
                res.send(recipes)
            }
            else {
                res.send('Recipe not found')
            }

        }
    } catch (e) {
        console.log(e)
    }


})

router.get('/:id', async (req, res) => {
    
    const { id } = req.params

    if(id.includes('-')){
        // lo busco en la db
        const recipe = await recipeDb(id)
        res.send(recipe)
    }
    else{
        // lo busco en la api
        const response = await axios.get(` https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        //console.log(response)
        
        res.json({
            id: response.data.id,
            name: response.data.title,
            image: response.data.image,
            summary: response.data.summary,
            score: response.data.spoonacularScore,
            healthScore: response.data.healthScore,
            diets: response.data.diets.map(e => {
                return{
                    name: e
                }
            }),
            analyzedInstructions: response.data.analyzedInstructions[0]?.steps.map(e => {
                return e.step
            }),
        })
    }
})

module.exports = router;