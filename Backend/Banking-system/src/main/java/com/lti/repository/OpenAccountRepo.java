package com.lti.repository;

import java.util.List;

import com.lti.pojo.OpenAccount;

public interface OpenAccountRepo {
	
	void save(OpenAccount account);
	OpenAccount getAccountByAccNumber(String accountNumber);
	boolean isAccountPresent(String aadharCard);
	Long numberOfAccountPresent();
	String maxAccountNumber();
	String maxRefId();
	List<OpenAccount> viewAllRecords();
	String findAccountNumberByRefId(String refId);
	void updateAccountStatus(String adminApproval, String adminRemark, String accNo);
	boolean isAccountActive(String acNo);
	
}