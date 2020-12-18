"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRepo = void 0;
const mockRecipe_1 = require("../../mocks/mockRecipe");
class RecipeRepo {
    constructor(models) {
        this.models = models;
    }
    async searchRecipes(recipe) {
        return await mockRecipe_1.mockRecipes;
    }
    async getRecipeById(recipeId) {
        return await mockRecipe_1.mockRecipe;
    }
}
exports.RecipeRepo = RecipeRepo;
//# sourceMappingURL=SequelizeRecipeRepo.js.map