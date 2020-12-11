import { UserId } from "../../users/domain/UserId"
import { UserName } from "../../users/domain/UserName"
import { Allergies } from "./Allergies"

export interface MemberProps {
    userId: UserId,
    userName: UserName,
    allergies: Allergies

}
export class Member {
    props: MemberProps

    private constructor(props: MemberProps) {
        this.props = props
    }

    public static create(props: MemberProps): Member {
        const member = new Member(props)

        return member
    }
}