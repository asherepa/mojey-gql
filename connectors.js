const setupTransactionModel = (conn) => {
  const transactionSchema = new conn.Schema({
    currency: String,
    memo: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Transaction = conn.model('Transaction', transactionSchema);

  return {
    Transaction,
  };
};

export { setupTransactionModel };
