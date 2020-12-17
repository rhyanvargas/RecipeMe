"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const save_recipes_1 = require("../../../usecases/save-recipes");
const memberRouter = express_1.default.Router();
exports.memberRouter = memberRouter;
memberRouter.post('/recipe', (req, res) => save_recipes_1.saveRecipesController.execute(req, res));
//# sourceMappingURL=member.js.map