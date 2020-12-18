import { NutritionFactsDTO } from '../../dto/NutritionFactDTO';

export interface SearchRecipesDTO {
  title?: string;
  ingredients: Array<string>;
  readyInMinutes?: number;
  dietType?: Array<string>;
  nutritionFacts?: NutritionFactsDTO;
  instructions?: string;
  image?: string;
  aggregateSaves?: number;
  aggregateCompleted?: number;
  url?: string;
}
