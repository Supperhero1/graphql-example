import { Args, Ctx, Query, Resolver } from "type-graphql"
import { BookType } from "./bookType"

@Resolver()
export class BookResolver {
    @Query(() => BookType)
    public async books(): Promise<BookType> {
        return {
            name: "NAME",
            authors: []
        }
    }
}
