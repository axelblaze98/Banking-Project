package com.lti.repository;

import com.lti.pojo.OpenAccount;
import com.lti.pojo.User;

public interface UserRepository {
	void save(User user);
	boolean isUserPresent();
	String getUserId();
	OpenAccount findbyId(long id);
	}
