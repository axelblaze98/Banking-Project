package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.TransactionDetailsDto;
import com.lti.dto.TransactionHistoryDto;
import com.lti.exception.ServiceException;
import com.lti.service.TransactionService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;
import com.lti.pojo.Transaction;

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
	
	@GetMapping(path="/miniStatement/{accountNumber}")
	public List<Transaction> getMiniStatement(@PathVariable(value="accountNumber") String accNumber) {
		return service.getMiniStatement(accNumber);
	}
	
	@PostMapping(path="/transactionHistory")
	public List<Transaction> getTransactionHistory(@RequestBody TransactionHistoryDto transdetails){
		String fromDate= service.changeDateFormat(transdetails.getFromDate());
		String toDate= service.changeDateFormat(transdetails.getFromDate());
		return service.getTransactionHistory(fromDate, toDate, transdetails.getAccountNumber());
	}
	
}
