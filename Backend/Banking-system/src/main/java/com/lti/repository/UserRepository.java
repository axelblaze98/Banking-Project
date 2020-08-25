package com.lti.repository;

import com.lti.pojo.OpenAccount;
import com.lti.pojo.User;

public interface UserRepository {
	void save(User user);
	boolean isUserPresent();
	String getUserId();
	OpenAccount findbyId(long id);
	boolean isAccountRegistered(long accNumber);
	boolean validUserIdPassword(String userId, String password);
	User findUserById(String userId);
	boolean isUserValid(String userId);
	int getNoOfInvalidAttempts(String userId);
	void setNoOfInvalidAttempts(String userId, int attempts);
}
