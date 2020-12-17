import { ValueObject } from "../../../shared/domain/ValueObject";

interface UserNameProps {
  name: string;
}

export class UserName extends ValueObject<UserNameProps> {
  public static maxLength: number = 15;
  public static minLength: number = 2;

  get value(): string {
    return this.props.name;
  }

  private constructor(props: UserNameProps) {
    super(props)
  }

  public static create(props: UserNameProps): UserName {

    if (!props.name) {
      throw new Error("Null username")
    }

    if (props.name.length < this.minLength) {
      throw new Error(`Username must be more ${this.minLength}`)
    }

    if (props.name.length > this.maxLength) {
      throw new Error(`Username must be less ${this.maxLength}`)
    }

    return new UserName(props);
  }
}
