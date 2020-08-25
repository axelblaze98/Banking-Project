package com.lti.dto;

public class CreateAccountStatus {
	
	private String firstName;
	private String refernceId;
	private String approvedByAdmin;
	private String adminRemark;
	private String accountNumber;
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getRefernceId() {
		return refernceId;
	}
	public void setRefernceId(String refernceId) {
		this.refernceId = refernceId;
	}
	public String getApprovedByAdmin() {
		return approvedByAdmin;
	}
	public void setApprovedByAdmin(String approvedByAdmin) {
		this.approvedByAdmin = approvedByAdmin;
	}
	public String getAdminRemark() {
		return adminRemark;
	}
	public void setAdminRemark(String adminRemark) {
		this.adminRemark = adminRemark;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	@Override
	public String toString() {
		return "CreateAccountStatus [firstName=" + firstName + ", refernceId=" + refernceId + ", approvedByAdmin="
				+ approvedByAdmin + ", adminRemark=" + adminRemark + ", accountNumber=" + accountNumber + "]";
	}
	
}
