"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterRecipeSaved = void 0;
const DomainEvents_1 = require("../../../shared/domain/events/DomainEvents");
const recipeSaved_1 = require("../domain/events/recipeSaved");
class AfterRecipeSaved {
    constructor(updateRecipeInfo) {
        this.setupSubscriptions();
        this.updateRecipeInfo = updateRecipeInfo;
    }
    setupSubscriptions() {
        DomainEvents_1.DomainEvents.register(this.onRecipeSaved.bind(this), recipeSaved_1.RecipeSaved.name);
    }
    async onRecipeSaved(event) {
        try {
            await this.updateRecipeInfo.execute({ recipeId: event.recipe.recipeId.id.toString() });
            console.log(`[AfterRecipeSaved]: Updated recipe info for {${event.recipe.title}}`);
        }
        catch (error) {
            console.log(`[AfterRecipeSaved]: Failed to update recipe info for {${event.recipe.title}}`);
        }
    }
}
exports.AfterRecipeSaved = AfterRecipeSaved;
//# sourceMappingURL=afterRecipeSaved.js.map