"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRecipes = void 0;
const NutrtionFacts_1 = require("../../domain/NutrtionFacts");
const Recipe_1 = require("../../domain/Recipe");
class SearchRecipes {
    constructor(recipeRepo) {
        this.recipeRepo = recipeRepo;
    }
    async execute(dto) {
        const nutritionFactsProps = {
            calories: dto.nutritionFacts.calories,
            servings: dto.nutritionFacts.servings,
        };
        const nutritionFacts = NutrtionFacts_1.NutritionFacts.create(nutritionFactsProps);
        const recipeProps = {
            title: dto.title,
            ingredients: dto.ingredients,
            readyInMinutes: dto.readyInMinutes,
            dietType: dto.dietType,
            nutritionFacts: nutritionFacts,
            instructions: dto.instructions,
            image: dto.image,
            aggregateSaves: dto.aggregateSaves,
            aggregateCompleted: dto.aggregateCompleted,
            url: dto.url,
        };
        const recipe = Recipe_1.Recipe.create(recipeProps);
        try {
            return this.recipeRepo.searchRecipes(recipe);
        }
        catch (error) {
            return error;
        }
    }
}
exports.SearchRecipes = SearchRecipes;
//# sourceMappingURL=SearchRecipes.js.map