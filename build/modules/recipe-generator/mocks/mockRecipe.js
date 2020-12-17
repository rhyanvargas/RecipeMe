"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCookedRecipes = exports.mockRecipes = exports.mockRecipe = void 0;
const UniqueEntityID_1 = require("../../../shared/domain/UniqueEntityID");
const UserId_1 = require("../../users/domain/UserId");
const CookedRecipe_1 = require("../domain/CookedRecipe");
const NutrtionFacts_1 = require("../domain/NutrtionFacts");
const Recipe_1 = require("../domain/Recipe");
const RecipeId_1 = require("../domain/RecipeId");
const createMockRecipe = () => {
    const imageUrl = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg';
    const recipeUrl = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/';
    const nutritionFactsProps = {
        calories: 9000,
        servings: 1
    };
    const nutritionFacts = NutrtionFacts_1.NutritionFacts.create(nutritionFactsProps);
    const recipeProps = {
        title: 'Go Ham n Cheeze',
        ingredients: [
            'Ham',
            'Cheeze',
            'Bread',
            'Salty'
        ],
        readyInMinutes: 30,
        dietType: ['ketogenic', 'dairyFree', 'vegeterian', 'vegan', 'glutenFree', 'whole30'],
        nutritionFacts: nutritionFacts,
        instructions: "Put some work into it",
        image: imageUrl,
        aggregateSaves: 300,
        aggregateCompleted: 900,
        url: recipeUrl,
    };
    return Recipe_1.Recipe.create(recipeProps, new UniqueEntityID_1.UniqueEntityID(1));
};
const createMockRecipes = () => {
    const imageUrl0 = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg';
    const recipeUrl0 = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/';
    const nutritionFactsProps0 = {
        calories: 9000,
        servings: 1
    };
    const nutritionFacts0 = NutrtionFacts_1.NutritionFacts.create(nutritionFactsProps0);
    const recipeProps0 = {
        title: 'Go Ham n Cheeze',
        ingredients: [
            'Ham',
            'Cheeze',
            'Bread',
            'Salty'
        ],
        readyInMinutes: 30,
        dietType: ['ketogenic', 'dairyFree', 'vegeterian', 'vegan', 'glutenFree', 'whole30'],
        nutritionFacts: nutritionFacts0,
        instructions: "Put some work into it",
        image: imageUrl0,
        aggregateSaves: 300,
        aggregateCompleted: 900,
        url: recipeUrl0,
    };
    const imageUrl1 = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg';
    const recipeUrl1 = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/';
    const nutritionFactsProps1 = {
        calories: 100,
        servings: 3
    };
    const nutritionFacts1 = NutrtionFacts_1.NutritionFacts.create(nutritionFactsProps1);
    const recipeProps1 = {
        title: 'Pizza',
        ingredients: [
            'Bread',
            'Cheese',
            'Tomato Sauce',
            'Pepperonis'
        ],
        readyInMinutes: 60,
        dietType: ['whole30'],
        nutritionFacts: nutritionFacts1,
        instructions: "Put some work into it",
        image: imageUrl1,
        aggregateSaves: 600,
        aggregateCompleted: 1200,
        url: recipeUrl1,
    };
    const imageUrl2 = 'https://www.foodrepublic.com/wp-content/uploads/2013/06/hamdude.jpg';
    const recipeUrl2 = 'https://www.aspicyperspective.com/nanas-epic-navy-bean-ham-bone-soup/';
    const nutritionFactsProps2 = {
        calories: 400,
        servings: 2
    };
    const nutritionFacts2 = NutrtionFacts_1.NutritionFacts.create(nutritionFactsProps2);
    const recipeProps2 = {
        title: 'Burrito',
        ingredients: [
            'Tortilla',
            'Beans',
            'Carne Asada',
        ],
        readyInMinutes: 10,
        dietType: ['glutenFree'],
        nutritionFacts: nutritionFacts2,
        instructions: "Put some work into it",
        image: imageUrl2,
        aggregateSaves: 700,
        aggregateCompleted: 1400,
        url: recipeUrl2,
    };
    return [
        Recipe_1.Recipe.create(recipeProps0, new UniqueEntityID_1.UniqueEntityID(1)),
        Recipe_1.Recipe.create(recipeProps1, new UniqueEntityID_1.UniqueEntityID(2)),
        Recipe_1.Recipe.create(recipeProps2, new UniqueEntityID_1.UniqueEntityID(3))
    ];
};
const createMockCookedRecipes = () => {
    const startAndPauseTimes = [
        { startTime: new Date(), pauseTime: new Date() },
        { startTime: new Date(), pauseTime: new Date() },
        { startTime: new Date(), pauseTime: new Date() }
    ];
    const cookedRecipeProps = {
        recipeId: RecipeId_1.RecipeId.create(new UniqueEntityID_1.UniqueEntityID(1)),
        memberId: UserId_1.UserId.create(new UniqueEntityID_1.UniqueEntityID("RANDOM_UUID_FOR_USER")),
        startAndPauseTimes: startAndPauseTimes,
        endTime: new Date()
    };
    return [
        CookedRecipe_1.CookedRecipe.create(cookedRecipeProps),
        CookedRecipe_1.CookedRecipe.create(cookedRecipeProps),
        CookedRecipe_1.CookedRecipe.create(cookedRecipeProps)
    ];
};
exports.mockRecipe = createMockRecipe();
exports.mockRecipes = createMockRecipes();
exports.mockCookedRecipes = createMockCookedRecipes();
//# sourceMappingURL=mockRecipe.js.map