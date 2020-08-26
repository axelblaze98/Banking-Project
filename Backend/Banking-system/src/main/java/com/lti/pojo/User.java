package com.lti.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="User_Login")
@NamedQuery(name = "tableEmpty", query = "select count(*) from User")
@NamedQuery(name = "getID", query = "select max(u.userId) from User u")
@NamedQuery(name="getAcc",query="select count(u.userId) from User u where u.accountNumber.accountNumber =:accNumber")
@NamedQuery(name="loginCheck",query=" select count(u.userId) from User u where u.userId=:id and u.loginPassword=:password")
@NamedQuery(name="userIdCheck",query="select count(u.userId) from User u where u.userId=:id")
@NamedQuery(name="updateInvalidAttempts",query="update User set numberOfInvalidAttempts=:attempts where userId=:id")
@NamedQuery(name="getInvalidAttempts",query="select u.numberOfInvalidAttempts from User u where u.userId=:id")
@NamedQuery(name="changePassword",query="update User set loginPassword=:password where userId=:id")
@NamedQuery(name="getIdByAccNumber",query="select u.userId from User u where u.accountNumber.accountNumber =:accNumber")
public class User {
	@Id
	@Column(name="userId",length=6)
	private String userId;
	@OneToOne
	@JoinColumn(name="accountNumber",nullable = false)
	private OpenAccount accountNumber;
	@Column(name="loginPassword",length=15)
	private String loginPassword;
	@Column(name="transactionPassword",length=4)
	private String transationalPassword;
	@Column(name="numberOfInvalidAttempts")
	private int numberOfInvalidAttempts;
	@Column(name="lastLogin")
	private String lastLogin;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public OpenAccount getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(OpenAccount accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getLoginPassword() {
		return loginPassword;
	}
	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}
	public String getTransationalPassword() {
		return transationalPassword;
	}
	public void setTransationalPassword(String transationalPassword) {
		this.transationalPassword = transationalPassword;
	}
	public int getNumberOfInvalidAttempts() {
		return numberOfInvalidAttempts;
	}
	public void setNumberOfInvalidAttempts(int numberOfInvalidAttempts) {
		this.numberOfInvalidAttempts = numberOfInvalidAttempts;
	}
	public String getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(String lastLogin) {
		this.lastLogin = lastLogin;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", accountNumber=" + accountNumber + ", loginPassword=" + loginPassword
				+ ", transationalPassword=" + transationalPassword + ", numberOfInvalidAttempts="
				+ numberOfInvalidAttempts + ", lastLogin=" + lastLogin + "]";
	}
	
}