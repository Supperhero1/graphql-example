import "reflect-metadata"
import { ApolloServer, gql } from 'apollo-server-express';
import { BookResolver } from './bookResolver';
import {buildSchema} from "type-graphql"
const express = require('express');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

async function startApolloServer(){
  const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
      title: String
      author: String
    }
  
    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
      books: [Book]
    }
  `;
   const schema = await buildSchema({
            resolvers: [BookResolver]
        })
    
  
    // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
    const server = new ApolloServer({ schema });
    await server.start();
  
    const app = express();
    server.applyMiddleware({ app });
  
  // The `listen` method launches a web server.
  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };

}
startApolloServer()
  