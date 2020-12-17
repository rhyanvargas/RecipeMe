import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { Entity } from '../../../shared/domain/Entity';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { DietType } from './DietType';
import { Ingredients } from './Ingredients';
import { NutritionFacts } from './NutrtionFacts';
import { RecipeId } from './RecipeId';

export interface RecipeProps {
  title: string;
  ingredients: Ingredients;
  readyInMinutes: number; //minutes
  dietType: DietType; // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
  nutritionFacts: NutritionFacts; // servings etc...
  instructions: string;
  image: string; // url of image
  aggregateSaves: number;
  aggregateCompleted: number;
  url: string;
}
export class Recipe extends Entity<RecipeProps>{

  private constructor(props: RecipeProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public get title(): string {
    return this.props.title
  }

  public get recipeId(): RecipeId {
    return RecipeId.create(this._id);
  }

  public static create(props: RecipeProps, id?: UniqueEntityID) {
    const recipe = new Recipe(props, id);

    return recipe;
  }
}

