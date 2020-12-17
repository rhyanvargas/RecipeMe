"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveRecipeController = void 0;
const BaseController_1 = require("../../../../shared/infra/http/models/BaseController");
const SaveRecipesErrors_1 = require("./SaveRecipesErrors");
class SaveRecipeController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl(req /*TODO: use auth with DecodedExpressRequest*/, res) {
        console.log(req);
        const userId = req.body.id;
        const dto = {
            memberId: userId,
            recipeId: req.body.recipeId
        };
        try {
            const result = await this.useCase.execute(dto);
            if (result instanceof Error) {
                const error = result;
                switch (error.message) {
                    case SaveRecipesErrors_1.SaveRecipesErrors.MemberNotFoundError:
                    case SaveRecipesErrors_1.SaveRecipesErrors.RecipeNotFoundError:
                    case SaveRecipesErrors_1.SaveRecipesErrors.RecipeCouldNotBeAdded:
                        return this.notFound(res, error.message);
                    default:
                        return this.fail(res, error.message);
                }
            }
            else {
                return this.ok(res);
            }
        }
        catch (err) {
            return this.fail(res, err);
        }
    }
}
exports.SaveRecipeController = SaveRecipeController;
//# sourceMappingURL=SaveRecipesController.js.map