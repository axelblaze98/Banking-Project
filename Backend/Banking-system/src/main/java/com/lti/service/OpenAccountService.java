package com.lti.service;

import java.util.List;

import com.lti.dto.CreateAccountStatus;
import com.lti.pojo.OpenAccount;

public interface OpenAccountService {
	
	void createAccount(OpenAccount account);
	List<OpenAccount> getAllAccounts();
	OpenAccount getAccountById(String refId);
	void addAccountStatus(CreateAccountStatus status);
}
