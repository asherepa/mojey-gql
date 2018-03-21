import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mocks } from './mocks';

const typeDefs = [
  `
type Query {
  ping: String
}

schema {
  query: Query
}`,
];

var resolvers = {
  Query: {
    ping(root) {
      return 'pong';
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
