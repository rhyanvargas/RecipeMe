"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v0_1 = require("./api/v0");
const app = express_1.default();
app.use(express_1.default.json());
app.use('/api/v0', v0_1.v0Router);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
//# sourceMappingURL=app.js.map