const { Router } = require("express");
const router = Router();
const axios = require("axios") ;
const { Diet } = require("../db.js");
require('dotenv').config();
const { API_KEY, API_KEY_1, API_KEY_2 } = process.env;

router.get("/", async (req, res) => {

    const diets = await Diet.findAll()
    //console.log(diets)
    if(!diets.length){
        try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_2}&addRecipeInformation=true&number=100`);
        
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