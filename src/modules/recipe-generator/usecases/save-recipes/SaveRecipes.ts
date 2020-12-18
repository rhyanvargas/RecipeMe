import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';
import { Member } from '../../domain/Member';
import { Recipe } from '../../domain/Recipe';
import { RecipeId } from '../../domain/RecipeId';
import { IMemberRepo } from '../../repos/MemberRepo';
import { IRecipeRepo } from '../../repos/RecipeRepo';
import { SaveRecipesDTO } from './SaveRecipesDTO';
import { SaveRecipesErrors } from './SaveRecipesErrors';

export class SaveRecipes {
  private recipeRepo: IRecipeRepo;
  private memberRepo: IMemberRepo;

  constructor(recipeRepo: any, memberRepo: any) {
    this.recipeRepo = recipeRepo;
    this.memberRepo = memberRepo;
  }

  public async execute(dto: SaveRecipesDTO): Promise<void | Error> {
    let member: Member;
    let recipe: Recipe;

    try {
      try {
        // Get Member
        member = await this.memberRepo.getMemberById(dto.memberId);
      } catch (error) {
        return new Error(SaveRecipesErrors.MemberNotFoundError);
      }

      try {
        // Get Recipe
        recipe = await this.recipeRepo.getRecipeById(
          RecipeId.create(new UniqueEntityID(dto.recipeId)),
        );
      } catch (error) {
        return new Error(SaveRecipesErrors.RecipeNotFoundError);
      }

      try {
        // Add Saved Recipe to update member
        member.addToSavedRecipes(recipe);

        await this.memberRepo.update(member);
      } catch (error) {
        return new Error(SaveRecipesErrors.RecipeCouldNotBeAdded);
      }

      return;
    } catch (error) {
      return Error('Unexpected Error');
    }
  }
}
