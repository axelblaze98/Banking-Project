package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.*;
import com.lti.exception.ServiceException;
import com.lti.pojo.OpenAccount;
import com.lti.pojo.User;
import com.lti.service.UserService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;
import com.lti.status.UserLoginStatus;
import com.lti.status.UserRegisterStatus;

@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping(path="/userRegister")
	
	private Status registerUser(@RequestBody UserDataDTO user) {
		try {
		String userId=service.registerUser(user);
		
		UserRegisterStatus registerStatus = new UserRegisterStatus();
		
		registerStatus.setUserId(userId);
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
}
