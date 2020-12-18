"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveRecipes = void 0;
const UniqueEntityID_1 = require("../../../../shared/domain/UniqueEntityID");
const RecipeId_1 = require("../../domain/RecipeId");
const SaveRecipesErrors_1 = require("./SaveRecipesErrors");
class SaveRecipes {
    constructor(recipeRepo, memberRepo) {
        this.recipeRepo = recipeRepo;
        this.memberRepo = memberRepo;
    }
    async execute(dto) {
        let member;
        let recipe;
        try {
            try {
                // Get Member
                member = await this.memberRepo.getMemberById(dto.memberId);
            }
            catch (error) {
                return new Error(SaveRecipesErrors_1.SaveRecipesErrors.MemberNotFoundError);
            }
            try {
                // Get Recipe
                recipe = await this.recipeRepo.getRecipeById(RecipeId_1.RecipeId.create(new UniqueEntityID_1.UniqueEntityID(dto.recipeId)));
            }
            catch (error) {
                return new Error(SaveRecipesErrors_1.SaveRecipesErrors.RecipeNotFoundError);
            }
            try {
                // Add Saved Recipe to update member
                member.addToSavedRecipes(recipe);
                await this.memberRepo.update(member);
            }
            catch (error) {
                return new Error(SaveRecipesErrors_1.SaveRecipesErrors.RecipeCouldNotBeAdded);
            }
            return;
        }
        catch (error) {
            return Error('Unexpected Error');
        }
    }
}
exports.SaveRecipes = SaveRecipes;
//# sourceMappingURL=SaveRecipes.js.map