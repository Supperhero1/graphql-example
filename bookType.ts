import { Field, ObjectType } from "type-graphql"
import { AuthorType } from "./authorType"

@ObjectType()
export class BookType {
    @Field()
    public name: string

    @Field(() => AuthorType)
    public authors: AuthorType[]

    constructor(name: string, authors: AuthorType[]){
        this.name=name
        this.authors=authors
    }
}
