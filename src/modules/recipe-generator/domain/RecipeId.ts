export interface RecipeIdProps {
    id?: string
}
export class RecipeId {
    props: RecipeIdProps

    get id(): string {
        return this.id || '';
    }

    private constructor(props: RecipeIdProps) {
        this.props = props
    }

    public static create(props: RecipeIdProps): RecipeId {
        return new RecipeId(props);
    }
}