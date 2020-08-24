package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.exception.ServiceException;
import com.lti.pojo.OpenAccount;
import com.lti.service.OpenAccountService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;

@RestController
public class OpenAccountController {
	
	@Autowired
	OpenAccountService service;
	
	@PostMapping(path="/openAccount")
	public Status openAccount(@RequestBody OpenAccount account) {
		try {
			service.createAccount(account);
			Status status = new Status();
			status.setMessage("Account created, check refernce ID "+account.getRefernceId()+" for future update");
			status.setStatus(StatusType.SUCCESS);
			return status;
		}
		catch(ServiceException e) {
			Status status = new Status();
			status.setMessage(e.getMessage());
			status.setStatus(StatusType.FAILURE);
			return status;
		}
	}

}
