import { DietType } from "./DietType"
import { Ingredients } from "./Ingredients"
import { NutritionFacts } from "./NutrtionFacts"
import { RecipeId } from "./RecipeId"

export interface RecipeProps {
    id: string,
    title: string,
    ingredients: Ingredients,
    readyInMinutes: number //minutes
    dietType: DietType, // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
    nutritionFacts: NutritionFacts, // servings etc...
    instructions: string,
    image: string, // url of image
    aggregateSaves: number,
    aggregateCompleted: number,
    url: string
}
export class Recipe {
    props: RecipeProps

    public get recipeId(): string {
        return RecipeId.create({ id: this.props.id }).id || ""
    }

    private constructor(props: RecipeProps) {
        this.props = props
    }

    public static create(props: RecipeProps) {
        const recipe = new Recipe(props)

        return recipe
    }
}