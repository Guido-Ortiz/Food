// const { Router } = require("express");
// const axios = require("axios");
// const { Op } = require("sequelize");
// const { Recipe, Diet } = require("../db");
// const { API_KEY } = process.env;
// const router = Router();

// const diets = [{name: 'Gluten Free'},
//                {name: 'Ketogenic'},
//                {name: 'Vegetarian'},
//                {name: 'Lacto-Vegetarian'},
//                {name: 'Lacto Ovo Vegetarian'},
//                {name: 'Vegan'},
//                {name: 'Pescatarian'},
//                {name: 'Paleolithic'},
//                {name: 'Primal'},
//                {name: 'Low FODMAP'},
//                {name: 'Whole 30'}]

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
const { API_KEY } = process.env;




router.get("/", async (req, resp) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        const diets = response.data?.results.map(e => e.diets);
        
        const flatDiets = diets.flat().concat("vegetarian", "ketogenic", "lacto-vegetarian", "whole30");
        const allDiets = [...new Set(flatDiets)];
        

        allDiets.forEach( e => {
            Diet.findOrCreate({
                where: {
                    name: e
                }
            });
        });

        const dietsDb = await Diet.findAll();
    
        resp.send(dietsDb);
    
    } catch(e) {
        console.log(e)
    }
});




module.exports = router;