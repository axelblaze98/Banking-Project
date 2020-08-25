package com.lti.status;

public class UserLoginStatus extends Status {
	int invalidLogins;
	String accountNumber;
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public int getInvalidLogins() {
		return invalidLogins;
	}
	public void setInvalidLogins(int invalidLogins) {
		this.invalidLogins = invalidLogins;
	}
	
}
