import { recipeRepo } from '../../repos';
import { SearchRecipes } from './SearchRecipes';
import { SearchRecipesController } from './SearchRecipesController';

const searchRecipes = new SearchRecipes(recipeRepo);

const searchRecipesController = new SearchRecipesController(searchRecipes);

export { searchRecipes, searchRecipesController };
