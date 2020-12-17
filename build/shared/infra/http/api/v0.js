"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v0Router = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("../../../../modules/recipe-generator/infra/http/routes");
const member_1 = require("../../../../modules/recipe-generator/infra/http/routes/member");
const v0Router = express_1.default.Router();
exports.v0Router = v0Router;
v0Router.get('/', (req, res) => {
    return res.json({ message: "Yo! we're up" });
});
v0Router.use('/recipes', routes_1.recipeRouter);
v0Router.use('/member', member_1.memberRouter);
//# sourceMappingURL=v0.js.map