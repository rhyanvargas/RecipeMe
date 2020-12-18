import {
  NutritionFacts,
  NutritionFactsProps,
} from '../../domain/NutrtionFacts';
import { Recipe, RecipeProps } from '../../domain/Recipe';
import { IRecipeRepo } from '../../repos/RecipeRepo';
import { SearchRecipesDTO } from './SearchRecipesDTO';

export class SearchRecipes {
  recipeRepo: IRecipeRepo;
  constructor(recipeRepo: IRecipeRepo) {
    this.recipeRepo = recipeRepo;
  }
  public async execute(dto: SearchRecipesDTO): Promise<Array<Recipe> | Error> {
    const nutritionFactsProps: NutritionFactsProps = {
      calories: dto?.nutritionFacts?.calories,
      servings: dto?.nutritionFacts?.servings,
    };
    const nutritionFacts = NutritionFacts.create(nutritionFactsProps);

    const recipeProps: RecipeProps = {
      title: dto?.title,
      ingredients: dto.ingredients,
      readyInMinutes: dto?.readyInMinutes,
      dietType: dto?.dietType,
      nutritionFacts: nutritionFacts,
      instructions: dto?.instructions,
      image: dto?.image,
      aggregateSaves: dto?.aggregateSaves,
      aggregateCompleted: dto?.aggregateCompleted,
      url: dto?.url,
    };
    const recipe = Recipe.create(recipeProps);

    try {
      return this.recipeRepo.searchRecipes(recipe);
    } catch (error) {
      return error;
    }
  }
}
