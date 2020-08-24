package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.exception.ServiceException;
import com.lti.pojo.OpenAccount;
import com.lti.repository.OpenAccountRepo;

@Service
public class OpenAccountServiceImpl implements OpenAccountService {

	@Autowired
	private OpenAccountRepo repo;
	
	@Override
	public void createAccount(OpenAccount account) {
		// TODO Auto-generated method stub

		boolean isAccountThere = repo.isAccountPresent(account.getAadharCard());
		if(isAccountThere) {
			throw new ServiceException("Account already exist");
		}
		else {
			Long initialAccNumber = (long) 50005001;
			Long initialRefId = (long) 30001;
			Long num = repo.numberOfAccountPresent();
			if(num == 0) {
				account.setAccountNumber(initialAccNumber);
				account.setRefernceId(initialRefId);
			}else {
				account.setAccountNumber(initialAccNumber+num);
				account.setRefernceId(initialRefId+num);
			}
			repo.save(account);
		}
	}
}
