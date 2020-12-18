"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRecipesController = exports.searchRecipes = void 0;
const repos_1 = require("../../repos");
const SearchRecipes_1 = require("./SearchRecipes");
const SearchRecipesController_1 = require("./SearchRecipesController");
const searchRecipes = new SearchRecipes_1.SearchRecipes(repos_1.recipeRepo);
exports.searchRecipes = searchRecipes;
const searchRecipesController = new SearchRecipesController_1.SearchRecipesController(searchRecipes);
exports.searchRecipesController = searchRecipesController;
//# sourceMappingURL=index.js.map