"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const Entity_1 = require("../../../shared/domain/Entity");
class UserId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return new UserId(id);
    }
}
exports.UserId = UserId;
//# sourceMappingURL=UserId.js.map