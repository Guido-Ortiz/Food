const { Recipe } = require("../../db");

let recipeDb = async function(id){
    try{
        return await Recipe.findByPk(id, {
            include: {
                model: Diet,
                attributes: ['id', 'name'],
                through: {attributes: []}
            }
        })
    } catch(e){
        console.log(e)
    }
}

module.exports = recipeDb;