"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = __importDefault(require("express"));
const search_recipes_1 = require("../../../usecases/search-recipes");
const recipeRouter = express_1.default.Router();
exports.recipeRouter = recipeRouter;
recipeRouter.get('/', (req, res) => search_recipes_1.searchRecipesController.execute(req, res));
//# sourceMappingURL=recipes.js.map