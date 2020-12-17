import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID"
import { UserId } from "../../users/domain/UserId"
import { CookedRecipe, CookedRecipeProps } from "../domain/CookedRecipe"
import { NutritionFactsProps, NutritionFacts } from "../domain/NutrtionFacts"
import { RecipeProps, Recipe } from "../domain/Recipe"
import { RecipeId } from "../domain/RecipeId"

const createMockRecipe = (): Recipe => {
    const imageUrl = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg'
    const recipeUrl = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/'

    const nutritionFactsProps: NutritionFactsProps = {
        calories: 9000,
        servings: 1
    }
    const nutritionFacts = NutritionFacts.create(nutritionFactsProps)

    const recipeProps: RecipeProps = {
        title: 'Go Ham n Cheeze',
        ingredients: [
            'Ham',
            'Cheeze',
            'Bread',
            'Salty'
        ],
        readyInMinutes: 30, //minutes
        dietType: ['ketogenic', 'dairyFree', 'vegeterian', 'vegan', 'glutenFree', 'whole30'], // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
        nutritionFacts: nutritionFacts, // servings etc...
        instructions: "Put some work into it",
        image: imageUrl, // url of image
        aggregateSaves: 300,
        aggregateCompleted: 900,
        url: recipeUrl,
    }


    return Recipe.create(recipeProps, new UniqueEntityID(1))
}
const createMockRecipes = (): Array<Recipe> => {
    const imageUrl0 = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg'
    const recipeUrl0 = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/'

    const nutritionFactsProps0: NutritionFactsProps = {
        calories: 9000,
        servings: 1
    }
    const nutritionFacts0 = NutritionFacts.create(nutritionFactsProps0)

    const recipeProps0: RecipeProps = {
        title: 'Go Ham n Cheeze',
        ingredients: [
            'Ham',
            'Cheeze',
            'Bread',
            'Salty'
        ],
        readyInMinutes: 30, //minutes
        dietType: ['ketogenic', 'dairyFree', 'vegeterian', 'vegan', 'glutenFree', 'whole30'], // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
        nutritionFacts: nutritionFacts0, // servings etc...
        instructions: "Put some work into it",
        image: imageUrl0, // url of image
        aggregateSaves: 300,
        aggregateCompleted: 900,
        url: recipeUrl0,
    }
    const imageUrl1 = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg'
    const recipeUrl1 = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/'

    const nutritionFactsProps1: NutritionFactsProps = {
        calories: 100,
        servings: 3
    }
    const nutritionFacts1 = NutritionFacts.create(nutritionFactsProps1)

    const recipeProps1: RecipeProps = {
        title: 'Pizza',
        ingredients: [
            'Bread',
            'Cheese',
            'Tomato Sauce',
            'Pepperonis'
        ],
        readyInMinutes: 60, //minutes
        dietType: ['whole30'], // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
        nutritionFacts: nutritionFacts1, // servings etc...
        instructions: "Put some work into it",
        image: imageUrl1, // url of image
        aggregateSaves: 600,
        aggregateCompleted: 1200,
        url: recipeUrl1,
    }
    const imageUrl2 = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg'
    const recipeUrl2 = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/'

    const nutritionFactsProps2: NutritionFactsProps = {
        calories: 400,
        servings: 2
    }
    const nutritionFacts2 = NutritionFacts.create(nutritionFactsProps2)

    const recipeProps2: RecipeProps = {
        title: 'Burrito',
        ingredients: [
            'Tortilla',
            'Beans',
            'Carne Asada',
        ],
        readyInMinutes: 10, //minutes
        dietType: ['glutenFree'], // ketogenic, dairyFree, vegeterian, vegan, glutenFree, whole30
        nutritionFacts: nutritionFacts2, // servings etc...
        instructions: "Put some work into it",
        image: imageUrl2, // url of image
        aggregateSaves: 700,
        aggregateCompleted: 1400,
        url: recipeUrl2,
    }

    return [
        Recipe.create(recipeProps0, new UniqueEntityID(1)),
        Recipe.create(recipeProps1, new UniqueEntityID(2)),
        Recipe.create(recipeProps2, new UniqueEntityID(3))
    ]
}

const createMockCookedRecipes = (): Array<CookedRecipe> => {

    const startAndPauseTimes: Array<{ startTime: Date; pauseTime: Date }> = [
        { startTime: new Date(), pauseTime: new Date() },
        { startTime: new Date(), pauseTime: new Date() },
        { startTime: new Date(), pauseTime: new Date() }
    ]
    const cookedRecipeProps: CookedRecipeProps = {
        recipeId: RecipeId.create(new UniqueEntityID(1)),
        memberId: UserId.create(new UniqueEntityID("RANDOM_UUID_FOR_USER")),
        startAndPauseTimes: startAndPauseTimes,
        endTime: new Date()
    }

    return [
        CookedRecipe.create(cookedRecipeProps),
        CookedRecipe.create(cookedRecipeProps),
        CookedRecipe.create(cookedRecipeProps)
    ]
}

export const mockRecipe = createMockRecipe()

export const mockRecipes = createMockRecipes()

export const mockCookedRecipes = createMockCookedRecipes()