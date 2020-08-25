package com.lti.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@NamedQuery(name = "gettingBIdFromAccounts", query = "select b.beneficiaryId from beneficiary b where b.accountNumber = :from and b.beneficiaryAccountNumber = :to")

@Entity
@Table(name = "beneficiary_details")
public class Beneficiary {
	
	@Id
	@GeneratedValue
	private int beneificiaryId;
	
	@Column(length = 9)
	private String accountNumber;

	@Column(length = 9)
	private String beneficiaryAccountNumber;

	@Column(length = 20)
	private String beneficiaryName;

	@Column(length = 15)
	private String beneficiaryNickName;

	public int getBeneificiaryId() {
		return beneificiaryId;
	}

	public void setBeneificiaryId(int beneificiaryId) {
		this.beneificiaryId = beneificiaryId;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getBeneficiaryAccountNumber() {
		return beneficiaryAccountNumber;
	}

	public void setBeneficiaryAccountNumber(String beneficiaryAccountNumber) {
		this.beneficiaryAccountNumber = beneficiaryAccountNumber;
	}

	public String getBeneficiaryName() {
		return beneficiaryName;
	}

	public void setBeneficiaryName(String beneficiaryName) {
		this.beneficiaryName = beneficiaryName;
	}

	public String getBeneficiaryNickName() {
		return beneficiaryNickName;
	}

	public void setBeneficiaryNickName(String beneficiaryNickName) {
		this.beneficiaryNickName = beneficiaryNickName;
	}

	@Override
	public String toString() {
		return "Beneficiary [beneificiaryId=" + beneificiaryId + ", accountNumber=" + accountNumber
				+ ", beneficiaryAccountNumber=" + beneficiaryAccountNumber + ", beneficiaryName=" + beneficiaryName
				+ ", beneficiaryNickName=" + beneficiaryNickName + "]";
	}
	
	
}
