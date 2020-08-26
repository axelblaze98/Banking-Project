package com.lti.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name="account_transactions")
@NamedQuery(name = "isTableEmpty", query = "select count(*) from Transaction")
@NamedQuery(name = "getTransactionId", query = "select max(u.transactionId) from Transaction u")
public class Transaction {
	@Id
	@Column(name="transactionId")
	private int transactionId;
	@Column(name="fromAccountNumber",length=9,nullable=false)
	private String fromAccountNumber;
	@Column(name="toAccountNumber",length=9,nullable=false)
	private String toAccountNumber;
	@Column(name="transactionAmount",nullable=false)
	private int transactionAmount;
	@Column(name="transactionMode",length=4,nullable=false)
	private String transactionMode;
	@Column(name="transactionDate",length=20,nullable=false)
	private String transactionDate;
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public String getFromAccountNumber() {
		return fromAccountNumber;
	}
	public void setFromAccountNumber(String fromAccountNumber) {
		this.fromAccountNumber = fromAccountNumber;
	}
	public String getToAccountNumber() {
		return toAccountNumber;
	}
	public void setToAccountNumber(String toAccountNumber) {
		this.toAccountNumber = toAccountNumber;
	}
	public int getTransactionAmount() {
		return transactionAmount;
	}
	public void setTransactionAmount(int transactionAmount) {
		this.transactionAmount = transactionAmount;
	}
	public String getTransactionMode() {
		return transactionMode;
	}
	public void setTransactionMode(String transactionMode) {
		this.transactionMode = transactionMode;
	}
	public String getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}
	
	@Override
	public String toString() {
		return "Transaction [transactionId=" + transactionId + ", fromAccountNumber=" + fromAccountNumber
				+ ", toAccountNumber=" + toAccountNumber + ", transactionAmount=" + transactionAmount
				+ ", transactionMode=" + transactionMode + ", transactionDate=" + transactionDate + "]";
	}
	
}
