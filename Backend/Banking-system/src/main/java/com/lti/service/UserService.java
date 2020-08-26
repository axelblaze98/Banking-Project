package com.lti.service;

import com.lti.dto.UserDataDTO;
import com.lti.pojo.User;

public interface UserService {
	
	String registerUser(UserDataDTO user);
	User loginUser(String userId, String password);
	int getInvalidAttempts(String UserId);
	String resetPassword(String userId, String updatedPassword);
}
