package com.lti.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


//@NamedQuery(name = "gettingBenefIdFromAccounts", query = "select b.beneficiaryId from beneficiary b where b.userAccountNumber = :from and b.beneficiaryAccountNumber = :to")
//														  select b.beneficiary_Id from beneficiary_details b where b.user_Account_Number = '124' and b.beneficiary_Account_Number = '123';
@NamedQuery(name = "beneficiaryExistance" , query = "select count(*) from Beneficiary b where b.userAccountNumber = :from and b.beneficiaryAccountNumber=:to\r\n")

@Entity
@Table(name = "beneficiary_details")
public class Beneficiary {
	
	@Id
	@GeneratedValue
	private int beneficiaryId;

	@Column(length = 9, nullable = false)
	private String beneficiaryAccountNumber;
	
	@Column(length = 20)
	private String beneficiaryName;

	@Column(length = 15)
	private String beneficiaryNickName;

	@Column(length = 9, nullable = false)
	private String userAccountNumber;
	
	
	public String getUserAccountName() {
		return userAccountNumber;
	}

	public void setUserAccountName(String userAccountNumber) {
		this.userAccountNumber = userAccountNumber;
	}

	public String getBenefAccountNumber() {
		return beneficiaryAccountNumber;
	}

	public void setBenefAccountNumber(String benefAccountNumber) {
		this.beneficiaryAccountNumber = benefAccountNumber;
	}

	public int getBeneificiaryId() {
		return beneficiaryId;
	}

	public void setBeneificiaryId(int beneficiaryId) {
		this.beneficiaryId = beneficiaryId;
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
		return "Beneficiary [beneficiaryId=" + beneficiaryId + ", beneficiaryAccountNumber=" + beneficiaryAccountNumber
				+ ", beneficiaryName=" + beneficiaryName + ", beneficiaryNickName=" + beneficiaryNickName
				+ ", userAccountNumber=" + userAccountNumber + "]";
	}	
	
	
}
