package com.lti.dto;

public class TransactionHistoryDto {
	private String fromDate;
	private String toDate;
	private String accountNumber;
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	@Override
	public String toString() {
		return "TransactionHistoryDto [fromDate=" + fromDate + ", toDate=" + toDate + ", accountNumber=" + accountNumber
				+ "]";
	}
}
