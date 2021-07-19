import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class AuthorType {
    @Field()
    public name: string

    constructor(name: string){
        this.name=name
    }
}
