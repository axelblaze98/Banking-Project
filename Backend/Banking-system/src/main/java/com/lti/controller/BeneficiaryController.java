//package com.lti.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.lti.service.BeneficiaryServiceImpl;
//
//@CrossOrigin(origins =  "http://localhost:4200")
//@RestController
//public class BeneficiaryController {
//
//	@Autowired
//	BeneficiaryServiceImpl service;
//	
//	@PostMapping("/getBeneficiaryName")
//	public String getName(String fromAcc, String toAcc) {
//		return service.getBeneficiaryName(fromAcc, toAcc);
//	}
//}
