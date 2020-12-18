"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeMap = void 0;
class RecipeMap {
    static toDTO(recipe) {
        return {
            title: recipe.title,
            ingredients: recipe.props.ingredients,
            readyInMinutes: recipe.props.readyInMinutes,
            dietType: recipe.props.dietType,
            nutritionFacts: {
                calories: recipe.props.nutritionFacts.props.calories,
                servings: recipe.props.nutritionFacts.props.servings,
            },
            instructions: recipe.props.instructions,
            image: recipe.props.image,
            aggregateSaves: recipe.props.aggregateSaves,
            aggregateCompleted: recipe.props.aggregateCompleted,
            url: recipe.props.url,
        };
    }
}
exports.RecipeMap = RecipeMap;
//# sourceMappingURL=RecipeMap.js.map