package com.lti.status;

public class UserLoginStatus extends Status {
	int invalidLogins;
	long accountNumber;
	public long getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public int getInvalidLogins() {
		return invalidLogins;
	}
	public void setInvalidLogins(int invalidLogins) {
		this.invalidLogins = invalidLogins;
	}
	
}
