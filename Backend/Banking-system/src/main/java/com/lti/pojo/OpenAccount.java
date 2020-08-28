package com.lti.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@NamedQuery(name="checkIfAccountPresent", query="select count(t.aadharCard) from OpenAccount t where t.aadharCard = :aadharNumber") 
@NamedQuery(name="countTotalAccounts", query="select count(*) from OpenAccount t") 
@NamedQuery(name="checkMaxAccountNumber", query="select max(t.accountNumber) from OpenAccount t") 
@NamedQuery(name="checkMaxRefernceIdNumber", query="select max(t.refernceId) from OpenAccount t") 
@NamedQuery(name="getAllAccounts", query="from OpenAccount t") 
@NamedQuery(name="getAccountNumberByRefId", query="select t.accountNumber from OpenAccount t where t.refernceId = :refId") 
@NamedQuery(name="updateAccountStatusByAdmin", query="update OpenAccount set approvedByAdmin = :status, adminRemark = :remark where accountNumber = :acc ") 
@NamedQuery(name="checkIfAccountActive", query="select count(t.accountNumber) from OpenAccount t where t.accountNumber = :accNo") 
@NamedQuery(name="getBalance",query="select u.accountBalance from OpenAccount u where u.accountNumber=:accNumber")
@NamedQuery(name="updateBalance",query="update OpenAccount set accountBalance=:balance where accountNumber=:accNumber")
@Entity
@Table(name="account_details")
public class OpenAccount {
	
	@Id
	@Column(length = 9, nullable = false)
	private String accountNumber;
	
	@Column(length = 6, nullable = false)
	private String refernceId;

	@Column(length = 20, nullable = false)
	private int accountBalance = 5000;

	@Column(length = 5)
	private String title;
	
	@Column(length = 20, nullable = false)
	private String firstName;
	
	@Column(length = 20, nullable = true)
	private String middleName;
	
	@Column(length = 20, nullable = false)
	private String lastName;
	
	@Column(length = 10, nullable = false)
	private String mobileNumber;
	
	@Column(length = 30, nullable = false)
	private String email;
	
	@Column(length = 20)
	private String fatherName;
	
	@Column(length = 20)
	private String motherName;
	
	@Column(unique = true, length = 12, nullable = false)
	private String aadharCard;
	
	@Column(length = 20)
	private String dob;
	

	@Column(length = 20)
	private String resAddress1;

	@Column(length = 20)
	private String resAddress2;

	@Column(length = 15)
	private String resLandMark;

	@Column(length = 15)
	private String resState;

	@Column(length = 15)
	private String resCity;

	@Column(length = 6)
	private String resPincode;
	

	@Column(length = 20)
	private String occupation = "Self-Employeed";

	@Column(length = 20)
	private String sourceOfIncome = "Service";

	@Column(length = 20)
	private String annualSalary = "5LPA";
	
	@Column(nullable = true, length = 20)
	private String approvedByAdmin = "Waiting for Approval";
	
	@Column(nullable = true, length = 50)
	private String adminRemark = "NA";
	
	
	
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getRefernceId() {
		return refernceId;
	}
	public void setRefernceId(String refernceId) {
		this.refernceId = refernceId;
	}
	public int getAccountBalance() {
		return accountBalance;
	}
	public void setAccountBalance(int accountBalance) {
		this.accountBalance = accountBalance;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFatherName() {
		return fatherName;
	}
	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}
	public String getMotherName() {
		return motherName;
	}
	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getResAddress1() {
		return resAddress1;
	}
	public void setResAddress1(String resAddress1) {
		this.resAddress1 = resAddress1;
	}
	public String getResAddress2() {
		return resAddress2;
	}
	public void setResAddress2(String resAddress2) {
		this.resAddress2 = resAddress2;
	}
	public String getResLandMark() {
		return resLandMark;
	}
	public void setResLandMark(String resLandMark) {
		this.resLandMark = resLandMark;
	}
	public String getResState() {
		return resState;
	}
	public void setResState(String resState) {
		this.resState = resState;
	}
	public String getResCity() {
		return resCity;
	}
	public void setResCity(String resCity) {
		this.resCity = resCity;
	}

	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getSourceOfIncome() {
		return sourceOfIncome;
	}
	public void setSourceOfIncome(String sourceOfIncome) {
		this.sourceOfIncome = sourceOfIncome;
	}
	public String getAnnualSalary() {
		return annualSalary;
	}
	public void setAnnualSalary(String annualSalary) {
		this.annualSalary = annualSalary;
	}
	public String getAdminRemark() {
		return adminRemark;
	}
	public void setAdminRemark(String adminRemark) {
		this.adminRemark = adminRemark;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getAadharCard() {
		return aadharCard;
	}
	public void setAadharCard(String aadharCard) {
		this.aadharCard = aadharCard;
	}
	public String getResPincode() {
		return resPincode;
	}
	public void setResPincode(String resPincode) {
		this.resPincode = resPincode;
	}
	
	public String getApprovedByAdmin() {
		return approvedByAdmin;
	}
	public void setApprovedByAdmin(String approvedByAdmin) {
		this.approvedByAdmin = approvedByAdmin;
	}
	
	
}
