"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = __importDefault(require("express"));
const recipeRouter = express_1.default.Router();
exports.recipeRouter = recipeRouter;
recipeRouter.get('/', (req, res) => {
    res.send('Hey PEASANT!');
});
// post ---> /api/v0/member/recipe ---> saveRecipe usecase
// get ---> /api/v0/member/recipe ---> getSavedRecipes usecase
//# sourceMappingURL=recipes.js.map