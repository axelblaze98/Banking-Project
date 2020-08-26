package com.lti.repository;

import java.util.List;

import com.lti.pojo.Transaction;

public interface TransactionRepository {
	boolean isTransactionPresent();
	void save(Transaction transaction);
	int getTransactionId();
	List<Transaction> getAllRecords(String accNumber);
}
