package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.AdminCredentials;
import com.lti.exception.ServiceException;
import com.lti.pojo.Admin;
import com.lti.service.AdminService;
import com.lti.status.LoginStatus;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;

@CrossOrigin(origins = "http://localhost:4200")
@RestController	
public class AdminController {
	
	@Autowired
	private AdminService service;
	
	@PostMapping(path="/registerAdmin")
	public Status registerAdmin(@RequestBody Admin admin) {
	try {
			service.registerAdmin(admin);
			Status registerStatus = new Status();
			registerStatus.setStatus(StatusType.SUCCESS);
			registerStatus.setMessage("User Registered");
			return registerStatus;
		}
	catch(ServiceException e) {
			Status registerStatus = new Status();
			registerStatus.setStatus(StatusType.FAILURE);
			registerStatus.setMessage(e.getMessage());
			return registerStatus;
		}
	}
	
	@PostMapping(path="/loginAdmin")
	public LoginStatus adminLogin(@RequestBody AdminCredentials adminCredentials) {
		try {
			Admin admin = service.adminLogin(adminCredentials);
			LoginStatus loginStatus = new LoginStatus();
			loginStatus.setName(admin.getAdminName());
			loginStatus.setUserId(admin.getAdminUserID());
			loginStatus.setMessage("Login Successful");
			loginStatus.setStatus(StatusType.SUCCESS);
			return loginStatus;
		}
		catch(ServiceException e) {
			LoginStatus loginStatus = new LoginStatus();
			loginStatus.setMessage(e.getMessage());
			loginStatus.setStatus(StatusType.FAILURE);
			return loginStatus;
		}
	}
}