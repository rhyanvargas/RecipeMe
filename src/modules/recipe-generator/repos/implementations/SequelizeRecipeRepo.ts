import { Recipe } from '../../domain/Recipe';
import { RecipeId } from '../../domain/RecipeId';
import { mockRecipe, mockRecipes } from '../../mocks/mockRecipe';
import { IRecipeRepo } from '../RecipeRepo';

export class RecipeRepo implements IRecipeRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }
  async searchRecipes(recipe: Recipe): Promise<Recipe[]> {
    return await mockRecipes;
  }
  async getRecipeById(recipeId: RecipeId | string): Promise<Recipe> {
    return await mockRecipe;
  }
}
