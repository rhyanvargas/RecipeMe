import { MemberRepo } from "./implementations/SequelizeMemberRepo"
import { RecipeRepo } from "./implementations/SequelizeRecipeRepo"

const memberRepo = new MemberRepo({})

const recipeRepo = new RecipeRepo({})

export {
    memberRepo,
    recipeRepo
}