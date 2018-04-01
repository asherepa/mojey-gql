import { makeExecutableSchema } from 'graphql-tools';

import resolverMap from './resolvers';

const typeDefs = `
enum AccountType {
  ASSET
  LIABILITY
  INCOME
  EXPENSE
  EQUITY
}

type Account {
  id: ID!
  name: String!
  type: AccountType
}

type Transaction {
  id: ID!
  currency: String!
  splits: [Split]
  memo: String
}

input TransactionInput {
  currency: String!
  memo: String
}

type Split {
  id: ID!
  debit: Float
  credit: Float
  memo: String
}

type Query {
  transactionById(id: ID!): Transaction
  transactions: [Transaction]
}

type Mutation {
  createTransaction(input: TransactionInput): Transaction
}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolverMap,
});

export default schema;
