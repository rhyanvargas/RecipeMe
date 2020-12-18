import { memberRepo, recipeRepo } from '../../repos';
import { SaveRecipes } from './SaveRecipes';
import { SaveRecipeController } from './SaveRecipesController';

const saveRecipes = new SaveRecipes(recipeRepo, memberRepo);

const saveRecipesController = new SaveRecipeController(saveRecipes);

export { saveRecipes, saveRecipesController };
