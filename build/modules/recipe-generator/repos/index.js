"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRepo = exports.memberRepo = void 0;
const SequelizeMemberRepo_1 = require("./implementations/SequelizeMemberRepo");
const SequelizeRecipeRepo_1 = require("./implementations/SequelizeRecipeRepo");
const memberRepo = new SequelizeMemberRepo_1.MemberRepo({});
exports.memberRepo = memberRepo;
const recipeRepo = new SequelizeRecipeRepo_1.RecipeRepo({});
exports.recipeRepo = recipeRepo;
//# sourceMappingURL=index.js.map