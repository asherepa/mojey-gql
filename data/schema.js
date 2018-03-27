import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schemaString = `
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
  typeDefs: [schemaString],
  resolvers,
});

export default schema;
