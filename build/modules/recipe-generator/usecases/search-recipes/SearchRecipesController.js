"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRecipesController = void 0;
const BaseController_1 = require("../../../../shared/infra/http/models/BaseController");
const RecipeMap_1 = require("../../mappers/RecipeMap");
const SearchRecipesErros_1 = require("./SearchRecipesErros");
class SearchRecipesController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl(req /*TODO: use auth with DecodedExpressRequest*/, res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const dto = {
            title: (_a = req.query) === null || _a === void 0 ? void 0 : _a.title,
            ingredients: req.query.ingredients,
            readyInMinutes: parseInt((_b = req.query) === null || _b === void 0 ? void 0 : _b.readyInMinutes),
            dietType: (_c = req.query) === null || _c === void 0 ? void 0 : _c.dietType,
            nutritionFacts: {
                calories: (_d = req.query) === null || _d === void 0 ? void 0 : _d.nutritionFacts['calories'],
                servings: (_e = req.query) === null || _e === void 0 ? void 0 : _e.nutritionFacts['servings'],
            },
            instructions: (_f = req.query) === null || _f === void 0 ? void 0 : _f.instructions,
            image: (_g = req.query) === null || _g === void 0 ? void 0 : _g.image,
            aggregateSaves: parseInt((_h = req.query) === null || _h === void 0 ? void 0 : _h.aggregateSaves),
            aggregateCompleted: parseInt((_j = req.query) === null || _j === void 0 ? void 0 : _j.aggregateCompleted),
            url: (_k = req.query) === null || _k === void 0 ? void 0 : _k.url,
        };
        try {
            const recipesOrError = await this.useCase.execute(dto);
            if (recipesOrError instanceof Error) {
                const error = recipesOrError;
                switch (error.message) {
                    case SearchRecipesErros_1.SearchRecipesErrors.RecipesNotFoundError:
                        return this.notFound(res, error.message);
                    default:
                        return this.fail(res, error.message);
                }
            }
            else {
                const recipes = recipesOrError;
                return this.ok(res, {
                    recipes: recipes.map(recipe => RecipeMap_1.RecipeMap.toDTO(recipe)),
                });
            }
        }
        catch (err) {
            return this.fail(res, err);
        }
    }
}
exports.SearchRecipesController = SearchRecipesController;
//# sourceMappingURL=SearchRecipesController.js.map