import { makeExecutableSchema } from 'graphql-tools';

import resolverMap from './resolvers';

const typeDefs = `
type Query {
  transaction(id: ID!): Transaction
  allTransactions: [Transaction]
}

type Account {
  id: ID!
  name: String!
  type: AccountType
}

enum AccountType {
  ASSET
  LIABILITY
  INCOME
  EXPENSE
  EQUITY
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
