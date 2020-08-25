package com.lti.service;

import java.util.List;

import com.lti.pojo.OpenAccount;

public interface OpenAccountService {
	
	void createAccount(OpenAccount account);
	List<OpenAccount> getAllAccounts();
	OpenAccount getAccountById(String refId);
	
}
