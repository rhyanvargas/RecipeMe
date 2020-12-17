import { Member } from "../../domain/Member";
import { Recipe } from "../../domain/Recipe";
import { SaveRecipesDTO } from "./SaveRecipesDTO";
import { SaveRecipesErrors } from "./SaveRecipesErrors";

export class SaveRecipes {
    private recipeRepo: any
    private memberRepo: any


    constructor(recipeRepo: any, memberRepo: any) {
        this.recipeRepo = recipeRepo
        this.memberRepo = memberRepo

    }

    public async execute(dto: SaveRecipesDTO): Promise<void | Error> {
        let member: Member;
        let recipe: Recipe;


        try {
            try { // Get Member
                member = await this.memberRepo.getMemberById(dto.memberId);
            } catch (error) {
                return new Error(SaveRecipesErrors.MemberNotFoundError)
            }

            try { // Get Recipe
                recipe = await this.recipeRepo.getRecipeById(dto.recipeId);

            } catch (error) {
                return new Error(SaveRecipesErrors.RecipeNotFoundError)
            }

            try { // Add Saved Recipe to update member
                member.addToSavedRecipes(recipe)

                await this.memberRepo.update(member)
            } catch (error) {
                return new Error(SaveRecipesErrors.RecipeCouldNotBeAdded)
            }

            return

        } catch (error) {
            return Error("Unexpected Error");
        }
    }
}