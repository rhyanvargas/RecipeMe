import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID"
import { UserId } from "../../users/domain/UserId"
import { UserName } from "../../users/domain/UserName"
import { CookedRecipe } from "../domain/CookedRecipe"
import { MemberProps, Member } from "../domain/Member"
import { Recipe } from "../domain/Recipe"
import { mockCookedRecipes, mockRecipe, mockRecipes } from "./mockRecipe"

const memberProps: MemberProps = {
    userId: UserId.create(new UniqueEntityID('RANDOM_UUID_FOR_USER')),
    userName: UserName.create({ name: 'NinjaChef69' }),
    allergies: ['haters', 'suckas'],
    savedRecipes: mockRecipes,
    cookedRecipes: mockCookedRecipes
}

export const mockMember = Member.create(memberProps)