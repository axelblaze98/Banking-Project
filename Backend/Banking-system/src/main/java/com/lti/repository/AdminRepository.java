package com.lti.repository;

import com.lti.pojo.Admin;

public interface AdminRepository {
	
	void save(Admin admin);
	Admin getAdminById(String userId);
	String getAdminByIdAndPassword(String userId, String password);
	boolean isAdminAvailable(String userId);
}
