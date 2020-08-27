package com.lti.repository;

import com.lti.pojo.OpenAccount;
import com.lti.pojo.User;

public interface UserRepository {
	void save(User user);
	boolean isUserPresent();
	String getUserId();
	OpenAccount findbyId(String id);
	boolean isAccountRegistered(String accNumber);
	boolean validUserIdPassword(String userId, String password);
	User findUserById(String userId);
	boolean isUserValid(String userId);
	int getNoOfInvalidAttempts(String userId);
	void setNoOfInvalidAttempts(String userId, int attempts);
	void resetPassword(String userId,String updatedPassword);
	String getUserByAccNumber(String accNumber);
	String getTransactionPassword(String fromAccNumber);
	void savelastLogin(String userId,String date);
}
