import { mongoose } from 'mongoose';
import { setupTransactionModel } from '../connectors';

const resolverMap = {
  Query: {
    transactionById: async ({ id }, context) => {
      context.Transaction.findById(id);
    },
    transactions: async (obj, context) => {
      context.Transaction.find({});
    },
  },
  Mutation: {
    createTransaction: ({ input }, context) => {
      const TransactionCtx = context.Transaction;
      console.log(input);
      return new TransactionCtx(input).save();
    },
  },
};

export async function context(headers, secrets) {
  let context = {};
  const mongo = await mongoose.createConnection(
    'mongodb://localhost/accounting',
    {
      useMongoClient: true,
    },
  );
  context = {
    ...context,
    ...setupTransactionModel(mongo),
  };
  console.log('context', context);
  return context;
}

export default resolverMap;
