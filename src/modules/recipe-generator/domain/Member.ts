import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UniqueEntityID } from '../../../shared/domain/UniqueEntityID';
import { UserId } from '../../users/domain/UserId';
import { UserName } from '../../users/domain/UserName';
import { Allergies } from './Allergies';
import { CookedRecipe } from './CookedRecipe';
import { RecipeSaved } from './events/recipeSaved';
import { MemberId } from './MemberId';
import { Recipe } from './Recipe';

export interface MemberProps {
  userId: UserId;
  userName: UserName;
  allergies: Allergies;
  savedRecipes: Array<Recipe>;
  cookedRecipes: Array<CookedRecipe>;
}
export class Member extends AggregateRoot<MemberProps>{

  get memberId(): MemberId {
    return MemberId.create(this._id);
  }

  get userId(): UserId {
    return this.props.userId;
  }
  public get savedRecipes(): Array<Recipe> {
    return this.props.savedRecipes
  }

  public addToSavedRecipes(recipe: Recipe): void {
    if (this.props.savedRecipes.filter(r => recipe.recipeId == r.recipeId).length === 0) {
      this.props.savedRecipes.push(recipe)
    }
    this.addDomainEvent(new RecipeSaved(this, recipe))
  }
  private constructor(props: MemberProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: MemberProps, id?: UniqueEntityID): Member {
    const member = new Member(props, id);

    return member;
  }
}
