package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.BeneficiaryDto;
import com.lti.exception.ServiceException;
import com.lti.service.BeneficiaryServiceImpl;
import com.lti.status.Status;
import com.lti.status.Status.StatusType;

@CrossOrigin(origins =  "http://localhost:4200")
@RestController
public class BeneficiaryController {

	@Autowired
	BeneficiaryServiceImpl service;

	@GetMapping("/getBeneficiaryNameAndAccountNo/{fromAcc}")
	public List<viewBeneficiary> getName(@PathVariable String fromAcc) {
		return service.getBeneficiaryNameAndAccNo(fromAcc);
	}
	
	@PostMapping(path = "/addBeneficiary")
	public Status addNewBeneficiary(@RequestBody BeneficiaryDto benf) {
		System.out.println(benf);
		try {
			service.addBeneficiary(benf);
			Status status = new Status();
			status.setMessage("Beneficiary Added");
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
}
