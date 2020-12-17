"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRepo = void 0;
const mockMember_1 = require("../../mocks/mockMember");
class MemberRepo {
    constructor(models) {
    }
    async getMemberById(memberId) {
        return await mockMember_1.mockMember;
    }
    update(member) {
        throw new Error("Method not implemented.");
    }
}
exports.MemberRepo = MemberRepo;
//# sourceMappingURL=SequelizeMemberRepo.js.map