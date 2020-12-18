import { Recipe } from '../domain/Recipe';
import { RecipeDTO } from '../dto/RecipeDTO';

export class RecipeMap {
  public static toDTO(recipe: Recipe): RecipeDTO {
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
