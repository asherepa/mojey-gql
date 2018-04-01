const setupTransactionModel = (mongoose) => {
  const transactionSchema = new mongoose.Schema({
    currency: String,
    memo: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Transaction = mongoose.model('transactions', transactionSchema);

  return {
    Transaction,
  };
};

export { setupTransactionModel };
