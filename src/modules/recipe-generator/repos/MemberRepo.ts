import { Member } from "../domain/Member";

export interface IMemberRepo {
    getMemberById(memberId: string): Promise<Member>;
    update(member: Member): Promise<void>;
}