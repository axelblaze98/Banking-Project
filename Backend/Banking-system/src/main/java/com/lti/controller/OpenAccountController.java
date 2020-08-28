package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.CreateAccountStatus;
import com.lti.dto.ViewUserDetailsDto;
import com.lti.exception.ServiceException;
import com.lti.pojo.OpenAccount;
import com.lti.service.OpenAccountService;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;
@CrossOrigin(origins =  "http://localhost:4200")
@RestController
public class OpenAccountController {
	
	@Autowired
	OpenAccountService service;
	
	@PostMapping(path="/openAccount")
	public Status openAccount(@RequestBody OpenAccount account) 
	{
		try 
		{
			service.createAccount(account);
			Status status = new Status();
			status.setMessage("Account created, check refernce ID "+account.getRefernceId()+" for future update");
			status.setStatus(StatusType.SUCCESS);
			return status;
		}
		catch(ServiceException e) 
		{
			Status status = new Status();
			status.setMessage(e.getMessage());
			status.setStatus(StatusType.FAILURE);
			return status;
		}
	}
	@GetMapping(path="/viewAllAccounts")
	public List<OpenAccount> viewAllAccounts(){
		return service.getAllAccounts();
	}
	
	@GetMapping(path = "/viewAccountByRefId/{refId}")
	public CreateAccountStatus viewAccountByRefId(@PathVariable(value = "refId") String refId) 
	{
//		System.out.println("Reference Id is: "+refId);
		
		try {
			OpenAccount account = service.getAccountById(refId);
			System.out.println("acc is : "+account);
			
			CreateAccountStatus status = new CreateAccountStatus();
			status.setRefernceId(account.getRefernceId());
			status.setFirstName(account.getFirstName());
			status.setAdminRemark(account.getAdminRemark());
			status.setApprovedByAdmin(account.getApprovedByAdmin());
			System.out.println(account.getApprovedByAdmin());
			if(account.getApprovedByAdmin().equals("Decline") || account.getApprovedByAdmin().equals("Waiting for Approval")) {
				status.setAccountNumber("NA");
			}else status.setAccountNumber(account.getAccountNumber());
			return status;
		}
		catch (Exception e) {
			// TODO: handle exception
			CreateAccountStatus status = new CreateAccountStatus();
			status.setAccountNumber("No User");
			return status;
		}
	}
	
	@PostMapping(path="/adminApproval")
	public Status adminApproval(@RequestBody CreateAccountStatus result) 
	{
		System.out.println(result);
		try 
		{
			service.addAccountStatus(result);
			Status status = new Status();
			status.setMessage("Updated Successfully");
			status.setStatus(StatusType.SUCCESS);
			return status;
		}
		catch (ServiceException e) 
		{
			// TODO: handle exception
			Status status = new Status();
			status.setMessage(e.getMessage());
			status.setStatus(StatusType.FAILURE);
			return status;
		}
	}
	
	@GetMapping(path = "/viewUserDetails/{accNumber}")
	public ViewUserDetailsDto getUserDetails(@PathVariable(value = "accNumber") String accNumber) {
		return service.userDetails(accNumber);
	}
}