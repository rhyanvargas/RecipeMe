"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRecipesController = exports.saveRecipes = void 0;
const repos_1 = require("../../repos");
const SaveRecipes_1 = require("./SaveRecipes");
const SaveRecipesController_1 = require("./SaveRecipesController");
const saveRecipes = new SaveRecipes_1.SaveRecipes(repos_1.recipeRepo, repos_1.memberRepo);
exports.saveRecipes = saveRecipes;
const saveRecipesController = new SaveRecipesController_1.SaveRecipeController(saveRecipes);
exports.saveRecipesController = saveRecipesController;
//# sourceMappingURL=index.js.map