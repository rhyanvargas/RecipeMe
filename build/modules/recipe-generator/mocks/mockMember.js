"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockMember = void 0;
const UniqueEntityID_1 = require("../../../shared/domain/UniqueEntityID");
const UserId_1 = require("../../users/domain/UserId");
const UserName_1 = require("../../users/domain/UserName");
const Member_1 = require("../domain/Member");
const mockRecipe_1 = require("./mockRecipe");
const memberProps = {
    userId: UserId_1.UserId.create(new UniqueEntityID_1.UniqueEntityID('RANDOM_UUID_FOR_USER')),
    userName: UserName_1.UserName.create({ name: 'NinjaChef69' }),
    allergies: ['haters', 'suckas'],
    savedRecipes: mockRecipe_1.mockRecipes,
    cookedRecipes: mockRecipe_1.mockCookedRecipes
};
exports.mockMember = Member_1.Member.create(memberProps);
//# sourceMappingURL=mockMember.js.map