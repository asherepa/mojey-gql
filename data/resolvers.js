import { Transaction } from '../connectors';

const resolvers = {
  Query: {
    transaction(obj, args, context, info) {
      return Transaction.findOne({ _id: args.id });
    },
    allTransactions() {
      return Transaction.find();
    },
  },
};

export default resolvers;
