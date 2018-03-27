import { Mongoose } from 'mongoose';
import _ from 'lodash';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/accounting', {
  useMongoClient: true,
});

const TransactionSchema = Mongoose.Schema({
  credit: Number,
  debit: Number,
  datetime: Date,
  path: [String],
  accounts: String,
  book: String,
  memo: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = Mongoose.model('transactions', TransactionSchema);

export { Transaction };
