import express from "express";

const recipeRouter = express.Router()

recipeRouter.get('/', (req, res) => {
    res.send('Hey PEASANT!')
})



export { recipeRouter }

// post ---> /api/v0/member/recipe ---> saveRecipe usecase

// get ---> /api/v0/member/recipe ---> getSavedRecipes usecase