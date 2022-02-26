const { Router } = require("express");
const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;
const router = Router();

router.get('/', async (req, res) => {
    try{

    } catch(e){
        console.log(e)
    }
})