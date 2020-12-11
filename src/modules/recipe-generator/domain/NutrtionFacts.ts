export interface NutritionFactsProps {
    servings: number,
    calories: number,
}
export class NutritionFacts {
    props: NutritionFactsProps

    public constructor(props: NutritionFactsProps) {
        this.props = props
    }

    public static create(props: NutritionFactsProps): NutritionFacts {
        const nutritionFacts = new NutritionFacts(props)

        return nutritionFacts
    }

}