package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.lti.dto.AdminCredentials;
import com.lti.exception.AdminServiceException;
import com.lti.pojo.Admin;
import com.lti.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository repo;
	
	@Override
	public void registerAdmin(Admin admin) {
		// TODO Auto-generated method stub
		Admin obj;
		obj=repo.getAdminById(admin.getAdminUserID());
		if(obj==null) {
			repo.save(admin);
		}else {
			throw new AdminServiceException("User Already Exists");
		}
	}

	@Override
	public Admin adminLogin(AdminCredentials adminCredentials)
	{
		// TODO Auto-generated method stub
		try {
//			System.out.println("user "+adminCredentials.getUserId());
//			System.out.println("value is "+repo.findAdminById(adminCredentials.getUserId()));
			if(!repo.isAdminAvailable(adminCredentials.getUserId())) {
//				System.out.println("printing this");
				throw new AdminServiceException("User Not Exist");
			}
			String userId = repo.getAdminByIdAndPassword(adminCredentials.getUserId(), adminCredentials.getPassword());
			Admin admin = repo.getAdminById(userId);
//			System.out.println("Admin is service is " +admin);
			return admin;
		}
		catch(EmptyResultDataAccessException e){
			throw new AdminServiceException("Incorrect UserId/Password");
		}
	}
}