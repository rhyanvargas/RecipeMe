import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { UserId } from "../../../users/domain/UserId";
import { UserName } from "../../../users/domain/UserName";
import { Member, MemberProps } from "../../domain/Member";
import { MemberId } from "../../domain/MemberId";
import { mockMember } from "../../mocks/mockMember";
import { IMemberRepo } from "../MemberRepo";

export class MemberRepo implements IMemberRepo {
    constructor(models: any) {

    }
    async getMemberById(memberId: string): Promise<Member> {


        return await mockMember
    }
    update(member: Member): Promise<void> {
        throw new Error("Method not implemented.");
    }

}