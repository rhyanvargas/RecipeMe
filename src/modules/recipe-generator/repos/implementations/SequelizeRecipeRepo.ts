import { Recipe } from "../../domain/Recipe";
import { RecipeId } from "../../domain/RecipeId";
import { mockRecipe } from "../../mocks/mockRecipe";
import { IRecipeRepo } from "../RecipeRepo";

export class RecipeRepo implements IRecipeRepo {

    private models: any;


    constructor(models: any) {
        this.models = models;

    }
    async getRecipeById(recipeId: RecipeId | string): Promise<Recipe> {

        return await mockRecipe
    }
}