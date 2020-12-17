"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName = void 0;
const ValueObject_1 = require("../../../shared/domain/ValueObject");
class UserName extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.name;
    }
    static create(props) {
        if (!props.name) {
            throw new Error("Null username");
        }
        if (props.name.length < this.minLength) {
            throw new Error(`Username must be more ${this.minLength}`);
        }
        if (props.name.length > this.maxLength) {
            throw new Error(`Username must be less ${this.maxLength}`);
        }
        return new UserName(props);
    }
}
exports.UserName = UserName;
UserName.maxLength = 15;
UserName.minLength = 2;
//# sourceMappingURL=UserName.js.map