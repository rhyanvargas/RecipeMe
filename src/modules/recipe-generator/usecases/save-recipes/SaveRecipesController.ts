import express from "express";
import { BaseController } from "../../../../shared/infra/http/models/BaseController";
import { DecodedExpressRequest } from "../../../users/infra/http/models/DecodedRequest";
import { SaveRecipes } from "./SaveRecipes";
import { SaveRecipesDTO } from "./SaveRecipesDTO";
import { SaveRecipesErrors } from "./SaveRecipesErrors";

export class SaveRecipeController extends BaseController {
    private useCase: SaveRecipes;

    constructor(useCase: SaveRecipes) {
        super();
        this.useCase = useCase;
    }
    async executeImpl(req: express.Request/*TODO: use auth with DecodedExpressRequest*/, res: express.Response): Promise<any> {
        console.log(req);

        const userId = req.body.id;

        const dto: SaveRecipesDTO = {
            memberId: userId,
            recipeId: req.body.recipeId
        }
        try {
            const result = await this.useCase.execute(dto);

            if (result instanceof Error) {
                const error = result;

                switch (error.message) {

                    case SaveRecipesErrors.MemberNotFoundError:
                    case SaveRecipesErrors.RecipeNotFoundError:
                    case SaveRecipesErrors.RecipeCouldNotBeAdded:
                        return this.notFound(res, error.message)
                    default:
                        return this.fail(res, error.message);
                }

            } else {
                return this.ok(res);
            }

        } catch (err) {
            return this.fail(res, err);
        }
    }



}