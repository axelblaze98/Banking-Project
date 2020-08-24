package com.lti.repository;

import com.lti.pojo.OpenAccount;

public interface OpenAccountRepo {
	
	void save(OpenAccount account);
	OpenAccount getAccountByAccNumber(int accountNumber);
	boolean isAccountPresent(String aadharCard);
	Long numberOfAccountPresent();
	Long maxAccountNumber();
	Long maxRefId();
}
