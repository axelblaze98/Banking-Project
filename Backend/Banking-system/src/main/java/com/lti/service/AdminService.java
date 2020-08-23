package com.lti.service;

import com.lti.dto.AdminCredentials;
import com.lti.pojo.Admin;

public interface AdminService {
	void registerAdmin(Admin admin);
	Admin adminLogin(AdminCredentials adminCredentials);
}
