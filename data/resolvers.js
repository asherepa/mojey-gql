import { Transaction } from '../connectors';

const resolverMap = {
  Query: {
    transaction(obj, args, context, info) {
      return Transaction.findOne({ _id: args.id });
    },
    allTransactions() {
      return Transaction.find();
    },
  },
};

export default resolverMap;
