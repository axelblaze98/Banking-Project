package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.TransactionDetailsDto;
import com.lti.exception.ServiceException;
import com.lti.service.TransactionService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class TransactionController {
	
	@Autowired
	private TransactionService service;
	
	@PostMapping("/transaction")
	public Status Transaction(@RequestBody TransactionDetailsDto transDetails) {
		try {
		service.transaction(transDetails);
		Status transactionStatus =new Status();
		transactionStatus.setStatus(StatusType.SUCCESS);
		transactionStatus.setMessage("Transaction Successful");
		return transactionStatus;
		}
		catch(ServiceException e) {
			Status transactionStatus =new Status();
			transactionStatus.setStatus(StatusType.FAILURE);
			transactionStatus.setMessage(e.getMessage());
			return transactionStatus;
			}
	}
	
}
