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
      console.log('createTransaction');
      console.log(input);
      const TransactionCtx = context.Transaction;
      return new TransactionCtx(input).save();
    },
  },
};

export async function context(headers, secrets) {
  let context = {};

  mongoose.Promise = global.Promise;
  mongoose.set('debug', true);

  const conn = await mongoose.createConnection(
    'mongodb://localhost:27017/accounting',
    {
      useMongoClient: true,
    },
  );
  context = {
    ...context,
    ...setupTransactionModel(conn),
  };
  conn.on('open', () => {
    console.log('Connection opened');
  });
  console.log('context', context);
  return context;
}

export default resolverMap;
