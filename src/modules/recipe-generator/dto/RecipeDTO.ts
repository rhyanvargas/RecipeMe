import { NutritionFactsDTO } from './NutritionFactDTO';

export interface RecipeDTO {
  title: string;
  ingredients: Array<string>;
  readyInMinutes: number; //minutes
  dietType: Array<string>; // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
  nutritionFacts: NutritionFactsDTO; // servings etc...
  instructions: string;
  image: string; // url of image
  aggregateSaves: number;
  aggregateCompleted: number;
  url: string;
}
