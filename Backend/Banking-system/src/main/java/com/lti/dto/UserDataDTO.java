package com.lti.dto;

public class UserDataDTO {
	private long accNumber;
	private String lgnPassword;
	private String tnPassword;
	
	public long getAccNumber() {
		return accNumber;
	}
	public void setAccNumber(long accNumber) {
		this.accNumber = accNumber;
	}
	public String getLgnPassword() {
		return lgnPassword;
	}
	public void setLgnPassword(String lgnPassword) {
		this.lgnPassword = lgnPassword;
	}
	public String getTnPassword() {
		return tnPassword;
	}
	public void setTnPassword(String tnPassword) {
		this.tnPassword = tnPassword;
	}
	
}

