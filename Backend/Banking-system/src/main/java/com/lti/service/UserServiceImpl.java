package com.lti.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;

import com.lti.pojo.OpenAccount;
import org.springframework.stereotype.Service;

import com.lti.dto.UserDataDTO;
import com.lti.exception.ServiceException;
import com.lti.pojo.User;
import com.lti.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository repo;
	
	public String registerUser(UserDataDTO user) {
		// TODO Auto-generated method stub
		String userId = "102321";
		User userLogin=new User();
		OpenAccount openAcc;
		
		if(repo.isAccountRegistered(user.getAccNumber())) {
			throw new ServiceException("Already Registered User");
		}
		openAcc = repo.findbyId(user.getAccNumber());
		
		if(openAcc==null) {
			throw new ServiceException("Account Not Found");
		}
		
		userLogin.setAccountNumber(openAcc);
		userLogin.setLoginPassword(user.getLgnPassword());
		userLogin.setTransationalPassword(user.getTnPassword());
		if(repo.isUserPresent()) {
			userLogin.setUserId(userId);
		}
		else {
			int num = Integer.parseInt(repo.getUserId());
			num++;
			userLogin.setUserId(Integer.toString(num));
		}
		
		
		repo.save(userLogin);
		
		return userLogin.getUserId();
	}
	
		@Override
		public User loginUser(String userId, String password) {
			
			if(!repo.isUserValid(userId))
			{	
				System.out.println("yash");
				throw new ServiceException("User Doesn't Exist");
			}
			else {
				System.out.println("Parth");
				int attempts = repo.getNoOfInvalidAttempts(userId);
				
				if(attempts>3){
					throw new ServiceException("Account Blocked");				
					}
				else if(!repo.validUserIdPassword(userId, password)) {
					repo.setNoOfInvalidAttempts(userId, attempts+1);
					throw new ServiceException("Invalid Credentials");
				}
				repo.setNoOfInvalidAttempts(userId, 0);
				DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");  
				LocalDateTime now = LocalDateTime.now();
				
				repo.savelastLogin(userId,dtf.format(now));
				User user = repo.findUserById(userId);
				return user;
			}
		}
		
		public int getInvalidAttempts(String userId) {
			System.out.println("Parth");
			return repo.getNoOfInvalidAttempts(userId);
		}
		
		@Override
		public String resetPassword(String userId, String updatedPassword) {
			// TODO Auto-generated method stub
			if(!repo.isUserValid(userId))
			{	
				throw new ServiceException("User Doesn't Exist");
			}
			repo.setNoOfInvalidAttempts(userId, 0);
			repo.resetPassword(userId,updatedPassword);
			return updatedPassword;
		}
		
		@Override
		public String getUserId(String accNumber) {
			// TODO Auto-generated method stub
			try {
			return repo.getUserByAccNumber(accNumber);
			}
			catch(EmptyResultDataAccessException e) {
				throw new ServiceException("Please Register First");
			}
		}
		@Override
		public String resetTransactionPassword(String userId, String updatedPassword) {
			// TODO Auto-generated method stub
			if(!repo.isUserValid(userId))
			{	
				throw new ServiceException("User Doesn't Exist");
			}
			repo.resetTransactionPassword(userId,updatedPassword);
			return updatedPassword;
		}
}
