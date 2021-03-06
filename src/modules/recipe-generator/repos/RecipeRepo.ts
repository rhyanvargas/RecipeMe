import { Recipe } from '../domain/Recipe';
import { RecipeId } from '../domain/RecipeId';

export interface IRecipeRepo {
  getRecipeById(recipeId: RecipeId): Promise<Recipe>;
  searchRecipes(recipe: Recipe): Promise<Array<Recipe>>;
}
