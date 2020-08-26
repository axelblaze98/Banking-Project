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
import com.lti.status.ForgetPasswordStatus;
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
	
	@PostMapping(path="/userLogin")
	private Status loginUser(@RequestBody UserLoginForgotPasswordDataDTO loginuser) {
		
		OpenAccount acc;
		
	try {
		User user = service.loginUser(loginuser.getUserId(),loginuser.getPassword());
		acc=user.getAccountNumber();
		
		UserLoginStatus loginStatus = new UserLoginStatus();
		
		loginStatus.setStatus(StatusType.SUCCESS);
		loginStatus.setInvalidLogins(user.getNumberOfInvalidAttempts());
		loginStatus.setAccountNumber(acc.getAccountNumber());
		loginStatus.setMessage("Login Successful");
		
		return loginStatus;
	}
	catch(ServiceException e) {
		
		UserLoginStatus loginStatus = new UserLoginStatus();
		if(e.getMessage().equals("User Doesn't Exist")) {
			
			loginStatus.setStatus(StatusType.FAILURE);
			loginStatus.setMessage(e.getMessage());
				
			return loginStatus;
		}
		else {
			
			loginStatus.setInvalidLogins(service.getInvalidAttempts(loginuser.getUserId()));
			loginStatus.setStatus(StatusType.FAILURE);
			loginStatus.setMessage(e.getMessage());
				
			return loginStatus;
		}
	}
	}
	@PostMapping(path="/forgetPassword")
	private Status forgetPassword(@RequestBody UserLoginForgotPasswordDataDTO forgetPassword) {
		ForgetPasswordStatus forgetPasswordStatus = new ForgetPasswordStatus();
		try {
		String newPassword= service.resetPassword(forgetPassword.getUserId(),forgetPassword.getPassword());
		
		forgetPasswordStatus.setPassword(newPassword);
		forgetPasswordStatus.setStatus(StatusType.SUCCESS);
		forgetPasswordStatus.setMessage("Password Change Successful");
		
		return forgetPasswordStatus;
		}
		catch(ServiceException e) {
			Status status= new Status();
			
			status.setStatus(StatusType.FAILURE);
			status.setMessage(e.getMessage());
			
			return status;
		}
	}
	
	@PostMapping(path="/getUserId")
	private Status getUserID(@RequestBody GetUserIdDTO getUserId) {
		try {
		Status status = new Status();
		
		String userId=service.getUserId(getUserId.getAccNumber());
		
		status.setStatus(StatusType.SUCCESS);
		status.setMessage("Your User Id is "+userId);
		return status;
		}
		catch(ServiceException e) {
			Status userIdStatus = new Status();
			
			userIdStatus.setStatus(StatusType.FAILURE);
			userIdStatus.setMessage(e.getMessage());
			
			return userIdStatus;
		}
	}

}
