import express from 'express';
import { searchRecipesController } from '../../../usecases/search-recipes';

const recipeRouter = express.Router();

recipeRouter.get('/', (req, res) => searchRecipesController.execute(req, res));

export { recipeRouter };
