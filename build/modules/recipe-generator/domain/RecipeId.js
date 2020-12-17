"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeId = void 0;
const Entity_1 = require("../../../shared/domain/Entity");
class RecipeId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return new RecipeId(id);
    }
}
exports.RecipeId = RecipeId;
//# sourceMappingURL=RecipeId.js.map