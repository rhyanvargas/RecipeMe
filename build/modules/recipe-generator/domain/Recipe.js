"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const Entity_1 = require("../../../shared/domain/Entity");
const RecipeId_1 = require("./RecipeId");
class Recipe extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    get title() {
        return this.props.title;
    }
    get recipeId() {
        return RecipeId_1.RecipeId.create(this._id);
    }
    static create(props, id) {
        const recipe = new Recipe(props, id);
        return recipe;
    }
}
exports.Recipe = Recipe;
//# sourceMappingURL=Recipe.js.map