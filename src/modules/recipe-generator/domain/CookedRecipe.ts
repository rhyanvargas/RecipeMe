import { UserId } from '../../users/domain/UserId';
import { RecipeId } from './RecipeId';

export interface CookedRecipeProps {
  recipeId: RecipeId;
  memberId: UserId;
  startAndPauseTimes: Array<{ startTime: Date; pauseTime: Date }>;
  endTime?: Date;
}
export class CookedRecipe {
  props: CookedRecipeProps;

  public isFinished(): boolean {
    return this.props.endTime !== undefined;
  }
  public calculateCookingTime(): number {
    const totalTime = this.props.startAndPauseTimes.reduce((acc, curr) => {
      let currPauseTime = new Date(curr.pauseTime);
      let currStartTime = new Date(curr.startTime);

      const interval = currPauseTime.valueOf() - currStartTime.valueOf();
      acc += interval;
      return acc;
    }, 0);

    return totalTime;
  }

  private constructor(props: CookedRecipeProps) {
    this.props = props;
  }

  public static create(props: CookedRecipeProps): CookedRecipe {
    const cookedRecipe = new CookedRecipe(props);

    return cookedRecipe;
  }
}
