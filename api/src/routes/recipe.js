const { Router } = require("express");
const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");
const { API_KEY, API_KEY_1, API_KEY_2 } = process.env;
const router = Router();

router.post('/', async (req, res) => {
    const { name, summary, score, healthScore, analyzedInstructions, image, diets, createdInDb } = req.body

    const newRecipe = await Recipe.create({
        name, 
        summary, 
        score, 
        healthScore, 
        analyzedInstructions,
        image,
        createdInDb
    })

    const dietsDb = await Diet.findAll({
        where: {
            name: diets
        }
    })

    await newRecipe.addDiet(dietsDb)

    res.send('Recipe created succesfully!')
})

module.exports= router;