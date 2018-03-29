import { makeExecutableSchema } from 'graphql-tools';

import resolverMap from './resolvers';

const typeDefs = `
type Query {
  transaction(id: ID!): Transaction
  allTransactions: [Transaction]
  getFortuneCookie: String # we'll use this later
}

type Transaction {
  id: ID!
  debit: Float
  credit: Float
}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolverMap,
});

export default schema;
