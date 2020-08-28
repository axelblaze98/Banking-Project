package com.lti.dto;

public class BeneficiaryDto {

	private String userAcNumber;
	private String benfAcNumber;
	private String name;
	private String nickName;
	
	public String getUserAcNumber() {
		return userAcNumber;
	}
	public void setUserAcNumber(String userAcNumber) {
		this.userAcNumber = userAcNumber;
	}
	public String getBenfAcNumber() {
		return benfAcNumber;
	}
	public void setBenfAcNumber(String benfAcNumber) {
		this.benfAcNumber = benfAcNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	@Override
	public String toString() {
		return "BeneficiaryDto [userAcNumber=" + userAcNumber + ", benfAcNumber=" + benfAcNumber + ", name=" + name
				+ ", nickName=" + nickName + "]";
	}
		
}
