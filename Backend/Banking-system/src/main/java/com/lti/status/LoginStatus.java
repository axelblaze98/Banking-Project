package com.lti.status;

public class LoginStatus extends Status {
	private String userId;
	private String name;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String UserId) {
		this.userId = UserId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}