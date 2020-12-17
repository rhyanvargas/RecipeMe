"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberId = void 0;
const Entity_1 = require("../../../shared/domain/Entity");
class MemberId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return new MemberId(id);
    }
}
exports.MemberId = MemberId;
//# sourceMappingURL=MemberId.js.map