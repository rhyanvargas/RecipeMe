import express from 'express';
import { BaseController } from '../../../../shared/infra/http/models/BaseController';
import { RecipeDTO } from '../../dto/RecipeDTO';
import { RecipeMap } from '../../mappers/RecipeMap';
import { SearchedRecipesDTO } from './SearchedRecipesDTO';
import { SearchRecipes } from './SearchRecipes';
import { SearchRecipesDTO } from './SearchRecipesDTO';
import { SearchRecipesErrors } from './SearchRecipesErros';

export class SearchRecipesController extends BaseController {
  private useCase: SearchRecipes;
  constructor(useCase: SearchRecipes) {
    super();
    this.useCase = useCase;
  }
  async executeImpl(
    req: express.Request /*TODO: use auth with DecodedExpressRequest*/,
    res: express.Response,
  ): Promise<any> {
    const dto: SearchRecipesDTO = {
      title: req.query?.title as string,
      ingredients: req.query.ingredients as string[],
      readyInMinutes: parseInt(req.query?.readyInMinutes as string),
      dietType: req.query?.dietType as string[],
      //TODO: need to fix nutrition facts as optional. Uncomment and run to reproduce error
      //nutritionFacts: {
      //   calories: req?.query?.nutritionFacts['calories'],
      //   servings: req?.query?.nutritionFacts['servings'],
      // },
      instructions: req.query?.instructions as string,
      image: req.query?.image as string,
      aggregateSaves: parseInt(req.query?.aggregateSaves as string),
      aggregateCompleted: parseInt(req.query?.aggregateCompleted as string),
      url: req.query?.url as string,
    };
    try {
      const recipesOrError = await this.useCase.execute(dto);

      if (recipesOrError instanceof Error) {
        const error = recipesOrError;

        switch (error.message) {
          case SearchRecipesErrors.RecipesNotFoundError:
            return this.notFound(res, error.message);
          default:
            return this.fail(res, error.message);
        }
      } else {
        const recipes = recipesOrError;

        return this.ok<SearchedRecipesDTO>(res, {
          recipes: recipes.map(recipe => RecipeMap.toDTO(recipe)),
        });
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
