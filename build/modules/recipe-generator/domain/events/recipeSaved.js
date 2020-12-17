"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSaved = void 0;
class RecipeSaved {
    constructor(member, recipe) {
        this.dateTimeOccurred = new Date();
        this.member = member;
        this.recipe = recipe;
    }
    getAggregateId() {
        return this.member.id;
    }
}
exports.RecipeSaved = RecipeSaved;
//# sourceMappingURL=recipeSaved.js.map