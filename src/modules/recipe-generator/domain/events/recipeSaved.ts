
import { Recipe } from '../Recipe'
import { Member } from '../Member'
import { IDomainEvent } from '../../../../shared/domain/events/IDomainEvent';
import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';

export class RecipeSaved implements IDomainEvent {
    public dateTimeOccurred: Date;
    public member: Member;
    public recipe: Recipe;

    constructor(member: Member, recipe: Recipe) {
        this.dateTimeOccurred = new Date();
        this.member = member
        this.recipe = recipe
    }

    getAggregateId(): UniqueEntityID {

        return this.member.id
    }
}