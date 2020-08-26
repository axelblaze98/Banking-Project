package com.lti.repository;

import com.lti.pojo.Transaction;

public interface TransactionRepository {
	boolean isTransactionPresent();
	void save(Transaction transaction);
	int getTransactionId();
}
