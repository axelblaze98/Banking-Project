package com.lti.service;

import java.util.List;

import com.lti.dto.TransactionDetailsDto;
import com.lti.pojo.Transaction;

public interface TransactionService {
	void transaction(TransactionDetailsDto transactionDetails);
	List<Transaction> getMiniStatement(String accNumber);
	List<Transaction> getTransactionHistory(String fromDate,String toDate,String accountNumber);
	String changeDateFormat(String date);
}
