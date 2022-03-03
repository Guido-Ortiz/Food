// const { Router } = require("express");
// const axios = require("axios");
// const { Op } = require("sequelize");
// const { Recipe, Diet } = require("../db");
// const { API_KEY } = process.env;
// const router = Router();

// const diets = [{name: 'gluten free'},
//                {name: 'ketogenic'},
//                {name: 'vegetarian'},
//                {name: 'lacto-vegetarian'},
//                {name: 'lacto ovo vegetarian'},
//                {name: 'vegan'},
//                {name: 'pescatarian'},
//                {name: 'paleolithic'},
//                {name: 'primal'},
//                {name: 'low FODMAP'},
//                {name: 'whole 30'}]

// router.get('/', async (req, res) => {
//     diets.forEach(d => {
//         Diet.findOrCreate({
//             where: {
//                 name: d.name
//             }
//         })
//     })
//     const dietsDb = await Diet.findAll()
//     const allDiets = dietsDb.map(d => d.name)
//     res.send(allDiets)
// })

// module.exports= router;

const { Router } = require("express");
const router = Router();
const axios = require("axios") ;
const { Diet } = require("../db.js");
require('dotenv').config();
const { API_KEY, API_KEY_1, API_KEY_2 } = process.env;

router.get("/", async (req, res) => {
        
    // try {
    //     const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_1}&addRecipeInformation=true&number=100`);
    //     const dietsApi = response.data?.results.map(e => e.diets);
    //     //console.log(dietsApi)
    //     const flatDiets = dietsApi.flat().concat("vegetarian", "ketogenic", "lacto-vegetarian", "whole30");
    //     const allDiets = [...new Set(flatDiets)];
        

    //     allDiets.forEach( e => {
    //         Diet.findOrCreate({
    //             where: {
    //                 name: e
    //             }
    //         });
    //     });

    //     const dietsDb = await Diet.findAll();
    
    //     resp.send(dietsDb);
    
    // } catch(e) {
    //     console.log(e)
    // }

    const diets = await Diet.findAll()
    //console.log(diets)
    if(!diets.length){
        try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        const dietsApi = response.data?.results.map(e => e.diets);
        
        const flatDiets = dietsApi.flat().concat("vegetarian", "ketogenic", "lacto-vegetarian", "whole 30");
        const allDiets = [...new Set(flatDiets)];
        
        allDiets.forEach( e => {
            Diet.findOrCreate({
                where: {
                    name: e
                }
            });
        });

        res.send(allDiets)
    
        } catch(e) {
            console.log(e)
        }
    }
    else{
        res.send(diets)
    }

});




module.exports = router;