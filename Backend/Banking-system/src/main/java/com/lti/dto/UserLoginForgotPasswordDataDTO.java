package com.lti.dto;

public class UserLoginForgotPasswordDataDTO {
	@Override
	public String toString() {
		return "UserLoginForgotPasswordDataDTO [userId=" + userId + ", password=" + password + "]";
	}

	private String userId;
	private String password;
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}
