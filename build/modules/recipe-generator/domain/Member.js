"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const recipeSaved_1 = require("./events/recipeSaved");
const MemberId_1 = require("./MemberId");
class Member extends AggregateRoot_1.AggregateRoot {
    get memberId() {
        return MemberId_1.MemberId.create(this._id);
    }
    get userId() {
        return this.props.userId;
    }
    get savedRecipes() {
        return this.props.savedRecipes;
    }
    addToSavedRecipes(recipe) {
        if (this.props.savedRecipes.filter(r => recipe.recipeId == r.recipeId).length === 0) {
            this.props.savedRecipes.push(recipe);
        }
        this.addDomainEvent(new recipeSaved_1.RecipeSaved(this, recipe));
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const member = new Member(props, id);
        return member;
    }
}
exports.Member = Member;
//# sourceMappingURL=Member.js.map