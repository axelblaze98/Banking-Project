package com.lti.dto;

public class TransactionDetailsDto {
	
	private String fromAccount;
	private String toAccount;
	private String transactionMode;
	private int transactionBalance;
	
	public String getFromAccount() {
		return fromAccount;
	}
	public void setFromAccount(String fromAccount) {
		this.fromAccount = fromAccount;
	}
	public String getToAccount() {
		return toAccount;
	}
	public void setToAccount(String toAccount) {
		this.toAccount = toAccount;
	}
	public String getTransactionMode() {
		return transactionMode;
	}
	public void setTransactionMode(String transactionMode) {
		this.transactionMode = transactionMode;
	}
	public int getTransactionBalance() {
		return transactionBalance;
	}
	public void setTransactionBalance(int transactionBalance) {
		this.transactionBalance = transactionBalance;
	}
	@Override
	public String toString() {
		return "TransactionDetailsDto [fromAccount=" + fromAccount + ", toAccount=" + toAccount + ", transactionMode="
				+ transactionMode + ", transactionBalance=" + transactionBalance + "]";
	}
	
	
	
}
