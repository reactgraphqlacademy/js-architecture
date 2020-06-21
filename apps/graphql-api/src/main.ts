const { ApolloServer } = require('apollo-server');
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
// import {
//   typeDefs as bookTypeDefs,
//   resolvers as booksResolvers,
// } from '@js-architecture-webinar/books';
import * as books from '@js-architecture-webinar/books';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  resolvers: mergeResolvers([books.resolvers]),
  typeDefs: mergeTypeDefs([books.typeDefs]),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
