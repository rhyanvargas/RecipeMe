import { DomainEvents } from "../../../shared/domain/events/DomainEvents";
import { IHandle } from "../../../shared/domain/events/IHandle";
import { RecipeSaved } from "../domain/events/recipeSaved";

export class AfterRecipeSaved implements IHandle<RecipeSaved> {
    // TODO: create UpdateRecipeInfo usecase
    private updateRecipeInfo: any

    constructor(updateRecipeInfo: any) {
        this.setupSubscriptions();
        this.updateRecipeInfo = updateRecipeInfo;
    }

    setupSubscriptions(): void {
        DomainEvents.register(this.onRecipeSaved.bind(this), RecipeSaved.name);
    }
    private async onRecipeSaved(event: RecipeSaved): Promise<void> {

        try {
            await this.updateRecipeInfo.execute({ recipeId: event.recipe.recipeId.id.toString() });
            console.log(`[AfterRecipeSaved]: Updated recipe info for {${event.recipe.title}}`);

        } catch (error) {
            console.log(`[AfterRecipeSaved]: Failed to update recipe info for {${event.recipe.title}}`);
        }
    }
}
